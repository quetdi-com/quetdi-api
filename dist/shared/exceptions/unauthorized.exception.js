"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedException = void 0;
const lodash_1 = require("lodash");
const api_exception_1 = require("./api.exception");
const constants_1 = require("../../constants");
class UnauthorizedException extends api_exception_1.ApiException {
    constructor(options = {}) {
        super({
            message: (0, lodash_1.get)(options, 'message', 'User is not authorized.'),
            code: (0, lodash_1.get)(options, 'code', "UNAUTHORIZED"),
            statusCode: 401,
            errorId: (0, lodash_1.get)(options, 'errorId', constants_1.ErrorId.UNAUTHORIZED),
            errors: (0, lodash_1.get)(options, 'errors', []),
        });
    }
}
exports.UnauthorizedException = UnauthorizedException;
//# sourceMappingURL=unauthorized.exception.js.map