"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsHttpController = void 0;
class EventsHttpController {
    constructor(eventUseCase) {
        this.fetchMyEvents = async (req, res, next) => {
            try {
                const meEvents = await this.eventUseCase.fetchMyEvents();
                res.json(meEvents);
            }
            catch (e) {
                next(e);
            }
        };
        this.addEvents = async (req, res, next) => {
            try {
                const meEvents = await this.eventUseCase.addEvents(req.body);
                res.json(meEvents);
            }
            catch (e) {
                next(e);
            }
        };
        this.uploadCoverImage = async (req, res, next) => {
            const file = req.file;
            try {
                const path = await this.eventUseCase.uploadCoverImage(req.file);
                res.json({ path });
            }
            catch (e) {
                next(e);
            }
        };
        this.eventUseCase = eventUseCase;
    }
}
exports.EventsHttpController = EventsHttpController;
//# sourceMappingURL=events.http-controller.js.map