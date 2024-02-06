"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleRoute = void 0;
const express_1 = require("express");
const app_injector_1 = require("../../../../app.injector");
const app_setting_route_1 = require("./app-setting.route");
const auth_route_1 = require("./auth.route");
const events_route_1 = require("./events.route");
class ModuleRoute {
    initialize(app) {
        const router = (0, express_1.Router)();
        router.use((0, express_1.json)());
        router.use((0, express_1.urlencoded)({ extended: false }));
        this.load(router);
        app.use('/v1', router);
        app.get('/health', (_req, res) => {
            res.json('OK');
        });
    }
    load(router) {
        router.use('/app', app_injector_1.locator.get(app_setting_route_1.AppSettingRoute).load());
        router.use('/events', app_injector_1.locator.get(events_route_1.EventsRoute).load());
        router.use('/auth', app_injector_1.locator.get(auth_route_1.AuthRoute).load());
    }
}
exports.ModuleRoute = ModuleRoute;
exports.default = new ModuleRoute();
//# sourceMappingURL=index.js.map