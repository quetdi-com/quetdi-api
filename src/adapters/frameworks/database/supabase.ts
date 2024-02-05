import { IDataSource } from '../../../shared/interfaces';
import { SupabaseClient } from '@supabase/supabase-js';
import { ModuleConfig } from '../../../shared/configs/module.config';
import { IDatabaseConfig } from '../../../shared/interfaces/supabase.interface';

export class SupabaseDataSource implements IDataSource<SupabaseClient> {
  private readonly dataSource: SupabaseClient;

  constructor(config: ModuleConfig) {
    const supabaseConfig = config.get<IDatabaseConfig>('supabaseConfig');
    this.dataSource = new SupabaseClient(supabaseConfig.url, supabaseConfig.key);
  }

  async connect(): Promise<void> {
    try {

      await this.dataSource.from('colors').select('*')
      console.log('Connected to the Supabase');

    } catch (e) {
      console.error('Unable to connect to the Supabase:', e.message);
      process.exit(0);
    }
  }

  instance(): SupabaseClient {
    return this.dataSource;
  }
}
