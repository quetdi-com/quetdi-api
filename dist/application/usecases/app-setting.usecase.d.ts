import { AppColorsListResponseDto } from '../../adapters/dtos/response/app-colors.response';
export interface AppSettingUsecase {
    getColors(): Promise<AppColorsListResponseDto>;
}
