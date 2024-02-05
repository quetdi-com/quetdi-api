import { IPagination, IPaginationPayload } from './pagination.interface';

export interface Mapper<
    DomainEntity,
    Model,
    Response,
> {
    toDomain(record: Model): DomainEntity;

    toResponse(entity: DomainEntity): Response;
}

export interface IPaginationMapper {
  toResponse<
    DomainEntity extends { totalCount: number },
    Response
  >(payload: IPaginationPayload<DomainEntity, Response>): IPagination<Response>;
}
