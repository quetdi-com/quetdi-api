"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_config_1 = require("../../shared/configs/module.config");
const app_config_1 = require("../../shared/configs/app.config");
const supabase_config_1 = require("../../shared/configs/supabase.config");
class QuetdiConfig extends module_config_1.ModuleConfig {
    load() {
        this.set('appConfig', new app_config_1.AppConfig());
        this.set('supabaseConfig', new supabase_config_1.SupabaseConfig());
    }
}
exports.default = new QuetdiConfig();
//# sourceMappingURL=index.js.map