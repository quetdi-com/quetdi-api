"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
const joi_1 = __importDefault(require("joi"));
const lodash_1 = require("lodash");
const base_config_1 = require("./base.config");
class AppConfig extends base_config_1.BaseConfig {
    constructor() {
        super('appConfig');
    }
    get() {
        return {
            host: (0, lodash_1.get)(process.env, 'HOST', '0.0.0.0'),
            port: (0, lodash_1.toNumber)((0, lodash_1.get)(process.env, 'PORT', 7891))
        };
    }
    schema() {
        return joi_1.default.object().keys({
            host: joi_1.default.string().not('').required(),
            port: joi_1.default.number().strict().required()
        });
    }
}
exports.AppConfig = AppConfig;
//# sourceMappingURL=app.config.js.map