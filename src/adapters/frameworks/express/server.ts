import { createServer, Server } from 'http';
import express, { Express } from 'express';
import cors from 'cors';
import moduleRoute from './routes';
import { ModuleConfig } from '../../../shared/configs/module.config';
import { loggerMiddleware } from './logger';
import { locator, register } from '../../../app.injector';
import { IExpressServer } from '../../../shared/interfaces/server.interface';
import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseDataSource } from '../database/supabase';
import errorHandler from './middlewares/error-handler';

export class ExpressServer implements IExpressServer {
  private server: Server;

  constructor() {
    this.server = createServer();
  }

  async initialize(config: ModuleConfig): Promise<void> {
    const app: Express = express();

    app.use(loggerMiddleware('quetdi'));
    app.use(cors());
    register(config);

    await locator.get(SupabaseDataSource).connect();


    // // Init routing
    moduleRoute.initialize(app);
    // Error handling
    app.use(errorHandler);

    this.server = createServer(app);
  }

  instance(): Server {
    return this.server;
  }
}

export default new ExpressServer();
