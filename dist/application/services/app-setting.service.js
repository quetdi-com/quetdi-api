"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSettingService = void 0;
class AppSettingService {
    constructor(appSettingRepository, colorsMapper) {
        this.appSettingRepository = appSettingRepository;
        this.colorsMapper = colorsMapper;
    }
    async getColors() {
        const result = await this.appSettingRepository.getColors();
        return {
            data: result.map((item) => this.colorsMapper.toResponse(item)),
            paging: {
                limit: 0,
                offset: 0,
                total: 0,
            },
        };
    }
}
exports.AppSettingService = AppSettingService;
//# sourceMappingURL=app-setting.service.js.map