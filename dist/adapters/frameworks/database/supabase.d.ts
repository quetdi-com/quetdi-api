import { IDataSource } from '../../../shared/interfaces';
import { SupabaseClient } from '@supabase/supabase-js';
import { ModuleConfig } from '../../../shared/configs/module.config';
export declare class SupabaseDataSource implements IDataSource<SupabaseClient> {
    private readonly dataSource;
    constructor(config: ModuleConfig);
    connect(): Promise<void>;
    instance(): SupabaseClient;
}
