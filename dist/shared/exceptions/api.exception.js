"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiException = void 0;
const constants_1 = require("../../constants");
class ApiException extends Error {
    constructor(options) {
        var _a, _b, _c;
        super(options.message);
        this.errorId = (_a = options.errorId) !== null && _a !== void 0 ? _a : constants_1.ErrorId.INTERNAL_SERVER_ERROR;
        this.code = (_b = options.code) !== null && _b !== void 0 ? _b : "INTERNAL_SERVER_ERROR";
        this.statusCode = (_c = options.statusCode) !== null && _c !== void 0 ? _c : 500;
        this.errors = options.errors;
    }
}
exports.ApiException = ApiException;
//# sourceMappingURL=api.exception.js.map