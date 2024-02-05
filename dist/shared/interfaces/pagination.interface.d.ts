import { Mapper } from './mapper.interface';
export interface IPaging {
    total: number;
    limit: number;
    offset: number;
}
export interface IPagination<T> {
    data: T[];
    paging: IPaging;
}
export interface IPaginationPayload<DomainEntity, Response> {
    mapper: Mapper<DomainEntity, unknown, Response>;
    entities: DomainEntity[];
    limit: number;
    offset: number;
}
