"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupabaseConfig = void 0;
const base_config_1 = require("./base.config");
const joi_1 = __importDefault(require("joi"));
const lodash_1 = require("lodash");
const process = __importStar(require("process"));
class SupabaseConfig extends base_config_1.BaseConfig {
    constructor() {
        super('supabaseConfig');
    }
    schema() {
        return joi_1.default.object().keys({
            url: joi_1.default.string().not('').required(),
            key: joi_1.default.string().not('').required()
        });
    }
    get() {
        return {
            url: (0, lodash_1.get)(process.env, 'SUPABASE_URL', 'https://eogmsnhtzbtdmkcomwni.supabase.co'),
            key: (0, lodash_1.get)(process.env, 'SUPABASE_KEY', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvZ21zbmh0emJ0ZG1rY29td25pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzODY5ODksImV4cCI6MjAyMDk2Mjk4OX0.LVYhu6F2Te9YMI9dxTD7mN3YbKmc-RIrUbfkTuZ0JJ0')
        };
    }
}
exports.SupabaseConfig = SupabaseConfig;
//# sourceMappingURL=supabase.config.js.map