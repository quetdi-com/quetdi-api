import { ModuleConfig } from '../../shared/configs/module.config';
import { AppConfig } from '../../shared/configs/app.config';
import { SupabaseConfig } from '../../shared/configs/supabase.config';


class QuetdiConfig extends ModuleConfig {
  public load(): void {
    this.set('appConfig', new AppConfig());
    this.set('supabaseConfig', new SupabaseConfig());
  }
}

export default new QuetdiConfig();
