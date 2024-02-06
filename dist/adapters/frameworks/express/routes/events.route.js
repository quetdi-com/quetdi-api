"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsRoute = void 0;
const express_1 = require("express");
class EventsRoute {
    constructor(controller) {
        this.controller = controller;
    }
    load() {
        const router = (0, express_1.Router)();
        router.get('/me', this.controller.fetchMyEvents);
        return router;
    }
}
exports.EventsRoute = EventsRoute;
//# sourceMappingURL=events.route.js.map