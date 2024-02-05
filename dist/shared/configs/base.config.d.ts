import Joi from 'joi';
import { IBaseConfig } from '../interfaces';
export declare abstract class BaseConfig<T> implements IBaseConfig<T> {
    protected constructor(configKey: string);
    protected configKey: string;
    abstract get(): T;
    abstract schema(): Joi.ObjectSchema;
}
