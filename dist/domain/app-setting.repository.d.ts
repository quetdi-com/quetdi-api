import { SupabaseDataSource } from '../adapters/frameworks/database/supabase';
import { ColorsMapper } from '../adapters/frameworks/mappers/colors.mapper';
import { AppColors } from './aggregates/colors.agg';
export declare class AppSettingRepository {
    private readonly supabase;
    private readonly colorsMapper;
    constructor(supabase: SupabaseDataSource, colorsMapper: ColorsMapper);
    getColors(): Promise<AppColors[]>;
}
