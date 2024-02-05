"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
const logger_1 = require("./logger");
const express_winston_1 = require("express-winston");
const loggerMiddleware = (module) => (0, express_winston_1.logger)((0, logger_1.transports)(module));
exports.loggerMiddleware = loggerMiddleware;
//# sourceMappingURL=logger-middleware.js.map