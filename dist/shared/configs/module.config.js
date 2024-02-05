"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleConfig = void 0;
class ModuleConfig {
    constructor() {
        this.configs = {};
    }
    get(configKey) {
        return this.configs[configKey].get();
    }
    set(configKey, config) {
        this.configs[configKey] = config;
    }
}
exports.ModuleConfig = ModuleConfig;
//# sourceMappingURL=module.config.js.map