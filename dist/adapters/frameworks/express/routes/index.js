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
        app.get('/bankQrCode', (_req, res) => {
            let { price } = _req.query;
            let priceLength = price.length;
            let priceCode = '54' + this.formatStringLength(price.toString()) + price.toString();
            let text = '00020101021238540010A00000072701240006970407011096020919960208QRIBFTTA5303704' +
                priceCode +
                '5802VN830084006304';
            res.json(text + this.calculateCRC(text).toString(16));
        });
        app.get('/health', (_req, res) => {
            res.json('OK');
        });
    }
    load(router) {
        router.use('/app', app_injector_1.locator.get(app_setting_route_1.AppSettingRoute).load());
        router.use('/events', app_injector_1.locator.get(events_route_1.EventsRoute).load());
        router.use('/auth', app_injector_1.locator.get(auth_route_1.AuthRoute).load());
    }
    calculateCRC(text) {
        let crc = 0xFFFF;
        for (let i = 0; i < text.length; i++) {
            crc ^= text.charCodeAt(i) << 8;
            for (let j = 0; j < 8; j++) {
                if ((crc & 0x8000) !== 0) {
                    crc = (crc << 1) ^ 0x1021;
                }
                else {
                    crc <<= 1;
                }
            }
        }
        return crc & 0xFFFF;
    }
    formatStringLength(str) {
        const length = str.length;
        if (length < 10) {
            return '0' + length.toString();
        }
        else {
            return length.toString();
        }
    }
}
exports.ModuleRoute = ModuleRoute;
exports.default = new ModuleRoute();
//# sourceMappingURL=index.js.map