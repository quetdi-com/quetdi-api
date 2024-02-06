import { EventsUsecase } from '../usecases/events.usecase';
import { EventsRepository } from '../../domain/events.repository';
import { EventMapper } from '../../adapters/frameworks/mappers/event.mapper';
import { EventsResponseDto } from '../../adapters/dtos/response/events.response';

export class EventsService implements EventsUsecase {
  private readonly repository: EventsRepository;
  private readonly eventMapper: EventMapper;

  constructor(
    repository: EventsRepository,
    eventMapper: EventMapper,
  ) {
    this.repository = repository;
    this.eventMapper = eventMapper;
  }

  async fetchMyEvents(): Promise<EventsResponseDto> {
    const result = await this.repository.fetchMyEvents();
    return {
      data: result.map((item) => this.eventMapper.toResponse(item)),
      paging: {
        limit: 0,
        offset: 0,
        total: 0,
      },
    }
  }
}
