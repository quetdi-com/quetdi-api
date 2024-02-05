"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerException = void 0;
const lodash_1 = require("lodash");
const api_exception_1 = require("./api.exception");
const constants_1 = require("../../constants");
class InternalServerException extends api_exception_1.ApiException {
    constructor(options = {}) {
        super({
            message: (0, lodash_1.get)(options, 'message', 'Internal Server Error'),
            code: (0, lodash_1.get)(options, 'code', "INTERNAL_SERVER_ERROR"),
            statusCode: 500,
            errorId: (0, lodash_1.get)(options, 'errorId', constants_1.ErrorId.INTERNAL_SERVER_ERROR),
            errors: (0, lodash_1.get)(options, 'errors', [])
        });
    }
}
exports.InternalServerException = InternalServerException;
//# sourceMappingURL=internal-server.exception.js.map