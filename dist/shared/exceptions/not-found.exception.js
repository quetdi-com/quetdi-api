"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
const lodash_1 = require("lodash");
const api_exception_1 = require("./api.exception");
const constants_1 = require("../../constants");
class NotFoundException extends api_exception_1.ApiException {
    constructor(options = {}) {
        super({
            message: (0, lodash_1.get)(options, 'message', 'Entity not found.'),
            code: (0, lodash_1.get)(options, 'code', "ENTITY_NOT_FOUND"),
            statusCode: 404,
            errorId: (0, lodash_1.get)(options, 'errorId', constants_1.ErrorId.ENTITY_NOT_FOUND),
            errors: (0, lodash_1.get)(options, 'errors', [])
        });
    }
}
exports.NotFoundException = NotFoundException;
//# sourceMappingURL=not-found.exception.js.map