import Joi from 'joi';
import { BaseConfig } from './base.config';
import { IAppConfig } from '../interfaces';
export declare class AppConfig extends BaseConfig<IAppConfig> {
    constructor();
    get(): IAppConfig;
    schema(): Joi.ObjectSchema;
}
