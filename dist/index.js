"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const os_1 = __importDefault(require("os"));
const cluster_1 = __importDefault(require("cluster"));
const configs_1 = __importDefault(require("./adapters/configs"));
const server_1 = __importDefault(require("./adapters/frameworks/express/server"));
const app = express();
const bootstrap = async () => {
    configs_1.default.load();
    await server_1.default.initialize(configs_1.default);
    const appConfig = configs_1.default.get('appConfig');
    const host = appConfig.host;
    const port = appConfig.port;
    const numCPUs = os_1.default.cpus().length;
    if (cluster_1.default.isMaster) {
        console.info(`Master process ${process.pid} is running`);
        for (let i = 0; i < numCPUs; i++) {
            cluster_1.default.fork();
        }
        cluster_1.default.on('exit', (worker) => {
            console.info(`Worker process ${worker.process.pid} died. Restarting...`);
            cluster_1.default.fork();
        });
    }
    else {
        server_1.default.instance().listen(port, host, () => {
            console.info(`Server is running at http://${host}:${port}`);
        });
    }
};
bootstrap()
    .catch((err) => {
    console.error('Starting server.ts has been failed!', err);
});
//# sourceMappingURL=index.js.map