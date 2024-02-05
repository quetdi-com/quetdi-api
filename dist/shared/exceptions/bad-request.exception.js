"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = void 0;
const lodash_1 = require("lodash");
const api_exception_1 = require("./api.exception");
const constants_1 = require("../../constants");
class BadRequestException extends api_exception_1.ApiException {
    constructor(options = {}) {
        super({
            message: (0, lodash_1.get)(options, 'message', 'Bad request.'),
            code: (0, lodash_1.get)(options, 'code', "BAD_REQUEST"),
            statusCode: 400,
            errorId: (0, lodash_1.get)(options, 'errorId', constants_1.ErrorId.BAD_REQUEST),
            errors: (0, lodash_1.get)(options, 'errors', [])
        });
    }
}
exports.BadRequestException = BadRequestException;
//# sourceMappingURL=bad-request.exception.js.map