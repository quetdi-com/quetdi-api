"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const express_1 = require("express");
class AuthRoute {
    constructor(controller, validator) {
        this.controller = controller;
        this.validator = validator;
    }
    load() {
        const router = (0, express_1.Router)();
        router.post('/login', this.validator.validateLoginRequest, this.controller.login);
        return router;
    }
}
exports.AuthRoute = AuthRoute;
//# sourceMappingURL=auth.route.js.map