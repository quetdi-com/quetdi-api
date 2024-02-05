import { BaseConfig } from './base.config';
import { IDatabaseConfig } from '../interfaces/supabase.interface';
import Joi from 'joi';
import { get } from 'lodash';
import * as process from 'process';

export class SupabaseConfig extends BaseConfig<IDatabaseConfig> {


  constructor() {
    super('supabaseConfig');
  }

  schema(): Joi.ObjectSchema {
    return Joi.object().keys({
      url: Joi.string().not('').required(),
      key: Joi.string().not('').required()
    });

  }

  get(): IDatabaseConfig {
    return {
      url: get(process.env, 'SUPABASE_URL', 'https://eogmsnhtzbtdmkcomwni.supabase.co'),
      key: get(process.env, 'SUPABASE_KEY', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvZ21zbmh0emJ0ZG1rY29td25pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzODY5ODksImV4cCI6MjAyMDk2Mjk4OX0.LVYhu6F2Te9YMI9dxTD7mN3YbKmc-RIrUbfkTuZ0JJ0')
    };
  }
}
