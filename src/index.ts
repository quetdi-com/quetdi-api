import express = require("express");
import os from 'os';
import cluster, { Worker } from 'cluster';
import { IAppConfig } from './shared/interfaces';
import config from './adapters/configs';
import server from './adapters/frameworks/express/server';

const app = express();


const bootstrap = async (): Promise<void> => {
  config.load();
  await server.initialize(config);

  const appConfig: IAppConfig = config.get<IAppConfig>('appConfig');
  const host: string = appConfig.host;
  const port: number = appConfig.port;
  const numCPUs: number = os.cpus().length;

  if (cluster.isMaster) {
    console.info(`Master process ${process.pid} is running`);

    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker: Worker) => {
      console.info(`Worker process ${worker.process.pid} died. Restarting...`);
      cluster.fork();
    });
  } else {
    server.instance().listen(port, host, () => {
      console.info(`Server is running at http://${host}:${port}`);
    });
  }
};

bootstrap()
  .catch((err: Error) => {
    console.error('Starting server.ts has been failed!', err);
  });
