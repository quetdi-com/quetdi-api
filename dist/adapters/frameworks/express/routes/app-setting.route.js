"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSettingRoute = void 0;
const express_1 = require("express");
class AppSettingRoute {
    constructor(controller, validator) {
        this.controller = controller;
        this.validator = validator;
    }
    load() {
        const router = (0, express_1.Router)();
        router.get('/colors', this.controller.getColors);
        return router;
    }
}
exports.AppSettingRoute = AppSettingRoute;
//# sourceMappingURL=app-setting.route.js.map