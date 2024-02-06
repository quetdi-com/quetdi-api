import { Mapper } from '../../../shared/interfaces';
import { AppColors } from '../../../domain/aggregates/colors.agg';
import { AppColorsResponseDto } from '../../dtos/response/app-colors.response';
import { AppColorsModel } from '../../../domain/model/app-colors.model';

export class ColorsMapper implements Mapper<AppColors, AppColorsModel, AppColorsResponseDto> {
  toDomain(record: AppColorsModel): AppColors {
    return {
      id: record.id,
      primary: record.primary_color,
      secondary: record.secondary_color,
    }
  }

  toResponse(entity: AppColors): AppColorsResponseDto {
    return {
      id: entity.id,
      primary: entity.primary,
      secondary: entity.secondary,
    };
  }
}
