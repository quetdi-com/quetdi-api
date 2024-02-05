import { IAppRoute } from './interfaces/route.interface';
import { Router } from 'express';
import { AppSettingHttpController } from '../../inbound/app-setting.http-controller';
import { AppValidator } from '../validators/app.validator';
export declare class AppSettingRoute implements IAppRoute {
    private readonly controller;
    private readonly validator;
    constructor(controller: AppSettingHttpController, validator: AppValidator);
    load(): Router;
}
