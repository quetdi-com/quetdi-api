import { SupabaseDataSource } from '../database/supabase';
export declare class AuthHttpController {
    private readonly supabase;
    constructor(supabase: SupabaseDataSource);
    login: (req: any, res: any, next: any) => Promise<void>;
}
