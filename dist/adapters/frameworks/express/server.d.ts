/// <reference types="node" />
import { Server } from 'http';
import { ModuleConfig } from '../../../shared/configs/module.config';
import { IExpressServer } from '../../../shared/interfaces/server.interface';
export declare class ExpressServer implements IExpressServer {
    private server;
    constructor();
    initialize(config: ModuleConfig): Promise<void>;
    instance(): Server;
}
declare const _default: ExpressServer;
export default _default;
