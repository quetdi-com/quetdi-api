import { AppSettingUsecase } from '../../../application/usecases/app-setting.usecase';

export class AppSettingHttpController {
  private readonly appSettingUseCase: AppSettingUsecase;

  constructor(
    appSettingUseCase: AppSettingUsecase
  ) {
    this.appSettingUseCase = appSettingUseCase;
  }

  getColors = async (req, res, next): Promise<void> => {
    try {
      const colors = await this.appSettingUseCase.getColors();
      res.json(colors);
    } catch (e) {
      next(e);
    }
  }
}
