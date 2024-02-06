import { EventsUsecase } from '../usecases/events.usecase';
import { EventsRepository } from '../../domain/events.repository';
import { EventMapper } from '../../adapters/frameworks/mappers/event.mapper';
import { EventsResponseDto } from '../../adapters/dtos/response/events.response';
export declare class EventsService implements EventsUsecase {
    private readonly repository;
    private readonly eventMapper;
    constructor(repository: EventsRepository, eventMapper: EventMapper);
    fetchMyEvents(): Promise<EventsResponseDto>;
}
