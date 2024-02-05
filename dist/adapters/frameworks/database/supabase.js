"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupabaseDataSource = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
class SupabaseDataSource {
    constructor(config) {
        const supabaseConfig = config.get('supabaseConfig');
        this.dataSource = new supabase_js_1.SupabaseClient(supabaseConfig.url, supabaseConfig.key);
    }
    async connect() {
        try {
            await this.dataSource.from('colors').select('*');
            console.log('Connected to the Supabase');
        }
        catch (e) {
            console.error('Unable to connect to the Supabase:', e.message);
            process.exit(0);
        }
    }
    instance() {
        return this.dataSource;
    }
}
exports.SupabaseDataSource = SupabaseDataSource;
//# sourceMappingURL=supabase.js.map