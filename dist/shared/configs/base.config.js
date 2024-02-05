"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseConfig = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
class BaseConfig {
    constructor(configKey) {
        if (!configKey) {
            throw new Error(`Config key required`);
        }
        const schema = this.schema();
        const { error } = schema.validate(this.get(), {
            abortEarly: false
        });
        if (error) {
            throw new Error(`Config key ${configKey} failed: ${error.message}`);
        }
        this.configKey = configKey;
    }
}
exports.BaseConfig = BaseConfig;
//# sourceMappingURL=base.config.js.map