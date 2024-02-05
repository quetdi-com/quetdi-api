import { AppSettingUsecase } from '../../../application/usecases/app-setting.usecase';
export declare class AppSettingHttpController {
    private readonly appSettingUseCase;
    constructor(appSettingUseCase: AppSettingUsecase);
    getColors: (req: any, res: any, next: any) => Promise<void>;
}
