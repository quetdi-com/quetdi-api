"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsService = void 0;
class EventsService {
    constructor(repository, eventMapper) {
        this.repository = repository;
        this.eventMapper = eventMapper;
    }
    async fetchMyEvents() {
        const result = await this.repository.fetchMyEvents();
        return {
            data: result.map((item) => this.eventMapper.toResponse(item)),
            paging: {
                limit: 0,
                offset: 0,
                total: result.length,
            },
        };
    }
}
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map
