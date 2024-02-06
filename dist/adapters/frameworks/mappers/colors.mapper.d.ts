import { Mapper } from '../../../shared/interfaces';
import { AppColors } from '../../../domain/aggregates/colors.agg';
import { AppColorsResponseDto } from '../../dtos/response/app-colors.response';
import { AppColorsModel } from '../../../domain/model/app-colors.model';
export declare class ColorsMapper implements Mapper<AppColors, AppColorsModel, AppColorsResponseDto> {
    toDomain(record: AppColorsModel): AppColors;
    toResponse(entity: AppColors): AppColorsResponseDto;
    toRequest(entity: AppColors): AppColorsModel;
}
