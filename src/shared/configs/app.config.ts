import Joi from 'joi';
import { get, toNumber } from 'lodash';
import { BaseConfig } from './base.config';
import { IAppConfig } from '../interfaces';

export class AppConfig extends BaseConfig<IAppConfig> {
  constructor() {
    super('appConfig');
  }

  get(): IAppConfig {
    return {
      host: get(process.env, 'HOST', '0.0.0.0'),
      port: toNumber(get(process.env, 'PORT', 7891))
    };
  }

  schema(): Joi.ObjectSchema {
    return Joi.object().keys({
      host: Joi.string().not('').required(),
      port: Joi.number().strict().required()
    });
  }
}
