"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const constants_1 = require("../../../../constants");
exports.default = (error, _req, res, _next) => {
    return res.status((0, lodash_1.get)(error, 'statusCode', 500)).json({
        errorId: (0, lodash_1.get)(error, 'errorId', constants_1.ErrorId.INTERNAL_SERVER_ERROR),
        code: (0, lodash_1.get)(error, 'code', "INTERNAL_SERVER_ERROR"),
        message: (0, lodash_1.get)(error, 'message', 'Internal Server Error!'),
        errors: (0, lodash_1.get)(error, 'errors', [])
    });
};
//# sourceMappingURL=error-handler.js.map