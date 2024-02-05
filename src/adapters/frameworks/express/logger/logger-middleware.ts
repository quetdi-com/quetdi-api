import { transports } from './logger';
import { logger } from 'express-winston';
import { Handler } from 'express';

export const loggerMiddleware = (module: string): Handler => logger(transports(module));
