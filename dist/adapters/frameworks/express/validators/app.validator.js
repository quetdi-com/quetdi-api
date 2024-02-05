"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppValidator = void 0;
const base_validator_1 = require("../../../../shared/validators/base.validator");
const joi_1 = __importDefault(require("joi"));
class AppValidator extends base_validator_1.BaseValidator {
    constructor() {
        super(...arguments);
        this.validateColors = this.validate({
            headers: joi_1.default.object({
                'access_token': joi_1.default.string().required(),
                'refresh_token': joi_1.default.string().required()
            })
        });
    }
}
exports.AppValidator = AppValidator;
//# sourceMappingURL=app.validator.js.map