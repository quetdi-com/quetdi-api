"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const lodash_1 = require("lodash");
const exceptions_1 = require("../exceptions");
class BaseValidator {
    constructor() {
        this.validate = (validateSchema) => (req, res, next) => {
            for (const key in validateSchema) {
                const valueToValidate = req[key];
                const schema = validateSchema[key];
                const { value: validatedHeaders } = joi_1.default.object({
                    unknown: joi_1.default.any()
                }).validate(req.headers);
                req.headers = validatedHeaders;
                if ((0, lodash_1.isNil)(schema)) {
                    throw new exceptions_1.InternalServerException({
                        message: 'Joi schema must be defined.'
                    });
                }
                const { error, value: validatedValue } = schema.validate(valueToValidate, {
                    abortEarly: false
                });
                (0, lodash_1.set)(req, key, validatedValue);
                if (error) {
                    throw new exceptions_1.JoiValidationException(error.details);
                }
            }
            return next();
        };
    }
}
exports.BaseValidator = BaseValidator;
//# sourceMappingURL=base.validator.js.map