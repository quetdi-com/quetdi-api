import Joi from 'joi';
export interface IBaseConfig<T> {
    get(): T;
    schema(): Joi.ObjectSchema;
}
