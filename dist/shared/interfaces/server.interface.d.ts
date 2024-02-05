/// <reference types="node" />
import { Server } from 'http';
import { ModuleConfig } from '../configs/module.config';
export interface IExpressServer {
    initialize(config: ModuleConfig): Promise<void>;
    instance(): Server;
}
