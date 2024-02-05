import { AppSettingUsecase } from '../usecases/app-setting.usecase';
import { AppColorsListResponseDto } from '../../adapters/dtos/response/app-colors.response';
import { AppSettingRepository } from '../../domain/app-setting.repository';
import { ColorsMapper } from '../../adapters/frameworks/mappers/colors.mapper';

export class AppSettingService implements AppSettingUsecase {
  private readonly appSettingRepository: AppSettingRepository;
  private  readonly colorsMapper: ColorsMapper;

  constructor(
    appSettingRepository: AppSettingRepository,
    colorsMapper: ColorsMapper
  ) {
    this.appSettingRepository = appSettingRepository;
    this.colorsMapper = colorsMapper;
  }

  async getColors(): Promise<AppColorsListResponseDto> {
    const result = await this.appSettingRepository.getColors();
    return {
      data: result.map((item) => this.colorsMapper.toResponse(item)),
      paging: {
        limit: 0,
        offset: 0,
        total: 0,
      },
    }
  }
}
