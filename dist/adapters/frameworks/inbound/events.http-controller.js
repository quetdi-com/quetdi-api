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
        this.eventUseCase = eventUseCase;
    }
}
exports.EventsHttpController = EventsHttpController;
//# sourceMappingURL=events.http-controller.js.map