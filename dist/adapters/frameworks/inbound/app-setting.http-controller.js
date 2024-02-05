"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSettingHttpController = void 0;
class AppSettingHttpController {
    constructor(appSettingUseCase) {
        this.getColors = async (req, res, next) => {
            try {
                const colors = await this.appSettingUseCase.getColors();
                res.json(colors);
            }
            catch (e) {
                next(e);
            }
        };
        this.appSettingUseCase = appSettingUseCase;
    }
}
exports.AppSettingHttpController = AppSettingHttpController;
//# sourceMappingURL=app-setting.http-controller.js.map