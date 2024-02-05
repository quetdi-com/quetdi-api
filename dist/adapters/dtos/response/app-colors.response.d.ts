import { PaginationResponseDto } from '../pagination.dto';
export interface AppColorsResponseDto {
    id: string;
    primary: string;
    secondary: string;
}
export interface AppColorsListResponseDto {
    data: AppColorsResponseDto[];
    paging: PaginationResponseDto;
}
