import { BaseConfig } from './base.config';
import { IDatabaseConfig } from '../interfaces/supabase.interface';
import Joi from 'joi';
export declare class SupabaseConfig extends BaseConfig<IDatabaseConfig> {
    constructor();
    schema(): Joi.ObjectSchema;
    get(): IDatabaseConfig;
}
