import { AppSettingUsecase } from '../usecases/app-setting.usecase';
import { AppColorsListResponseDto } from '../../adapters/dtos/response/app-colors.response';
import { AppSettingRepository } from '../../domain/app-setting.repository';
import { ColorsMapper } from '../../adapters/frameworks/mappers/colors.mapper';
export declare class AppSettingService implements AppSettingUsecase {
    private readonly appSettingRepository;
    private readonly colorsMapper;
    constructor(appSettingRepository: AppSettingRepository, colorsMapper: ColorsMapper);
    getColors(): Promise<AppColorsListResponseDto>;
}
