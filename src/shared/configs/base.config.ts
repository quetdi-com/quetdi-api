import Joi from 'joi';
import { IBaseConfig } from '../interfaces';
import { config } from 'dotenv';

config();

export abstract class BaseConfig<T> implements IBaseConfig<T> {
  protected constructor(configKey: string) {
    if (!configKey) {
      throw new Error(`Config key required`);
    }

    const schema: Joi.ObjectSchema = this.schema();

    const { error } = schema.validate(this.get(), {
      abortEarly: false
    });

    if (error) {
      throw new Error(`Config key ${configKey} failed: ${error.message}`);
    }

    this.configKey = configKey;
  }
  protected configKey: string;
  abstract get(): T;
  abstract schema(): Joi.ObjectSchema;
}
