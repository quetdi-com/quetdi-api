"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiValidationException = void 0;
const lodash_1 = require("lodash");
const api_exception_1 = require("./api.exception");
const constants_1 = require("../../constants");
class JoiValidationException extends api_exception_1.ApiException {
    constructor(details, options = {}) {
        const errors = details.map((item) => {
            const idMapping = (0, lodash_1.toString)((0, lodash_1.get)(constants_1.JOI_MAPPING, item.type, ''));
            const errorId = constants_1.ErrorId[idMapping];
            const field = (0, lodash_1.join)(item.path, '.');
            const message = (0, lodash_1.get)(item, 'message');
            return { errorId, field, message };
        });
        super({
            errorId: constants_1.ErrorId.INVALID_PARAMETER,
            message: (0, lodash_1.get)(options, 'message', 'The format is not correct.'),
            code: (0, lodash_1.get)(options, 'code', "INVALID_PARAMETER"),
            statusCode: 400,
            errors
        });
    }
}
exports.JoiValidationException = JoiValidationException;
//# sourceMappingURL=joi.exception.js.map