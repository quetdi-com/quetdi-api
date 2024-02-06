"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsRoute = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
class EventsRoute {
    constructor(controller) {
        this.controller = controller;
    }
    load() {
        const upload = (0, multer_1.default)({
            storage: multer_1.default.memoryStorage(),
            limits: {
                fileSize: 8 * 1024 * 1024,
                files: 1,
            },
        });
        const router = (0, express_1.Router)();
        router.get('/me', this.controller.fetchMyEvents);
        router.post('/add', this.controller.addEvents);
        router.post('/uploadCoverImage', upload.single('image'), this.controller.uploadCoverImage);
        return router;
    }
}
exports.EventsRoute = EventsRoute;
//# sourceMappingURL=events.route.js.map