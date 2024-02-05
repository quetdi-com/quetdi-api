"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidator = void 0;
const base_validator_1 = require("../../../../shared/validators/base.validator");
const joi_1 = __importDefault(require("joi"));
class AuthValidator extends base_validator_1.BaseValidator {
    constructor() {
        super(...arguments);
        this.validateLoginRequest = this.validate({
            body: joi_1.default.object({
                idToken: joi_1.default.string().required()
            })
        });
    }
}
exports.AuthValidator = AuthValidator;
//# sourceMappingURL=auth.validator.js.map