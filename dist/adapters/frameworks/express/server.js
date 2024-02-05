"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressServer = void 0;
const http_1 = require("http");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const logger_1 = require("./logger");
const app_injector_1 = require("../../../app.injector");
const supabase_1 = require("../database/supabase");
const error_handler_1 = __importDefault(require("./middlewares/error-handler"));
class ExpressServer {
    constructor() {
        this.server = (0, http_1.createServer)();
    }
    async initialize(config) {
        const app = (0, express_1.default)();
        app.use((0, logger_1.loggerMiddleware)('quetdi'));
        app.use((0, cors_1.default)());
        (0, app_injector_1.register)(config);
        await app_injector_1.locator.get(supabase_1.SupabaseDataSource).connect();
        routes_1.default.initialize(app);
        app.use(error_handler_1.default);
        this.server = (0, http_1.createServer)(app);
    }
    instance() {
        return this.server;
    }
}
exports.ExpressServer = ExpressServer;
exports.default = new ExpressServer();
//# sourceMappingURL=server.js.map