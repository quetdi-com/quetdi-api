import { EventsUsecase } from '../usecases/events.usecase';
import { EventsRepository } from '../../domain/events.repository';
import { EventMapper } from '../../adapters/frameworks/mappers/event.mapper';
import { EventResponseDto, EventsResponseDto } from '../../adapters/dtos/response/events.response';
import { Event } from '../../domain/aggregates/event.agg';
import multer from 'multer';

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

  async addEvents(event: Event): Promise<EventResponseDto> {
    const result = await this.repository.addEvents(event);

    return this.eventMapper.toResponse(result[0])
  }

  async uploadCoverImage(file: multer.File): Promise<string> {
    return await this.repository.uploadCoverImage(file);
  }

  async fetchMyEvents(): Promise<EventsResponseDto> {
    const result = await this.repository.fetchMyEvents();
    return {
      data: result.map((item) => this.eventMapper.toResponse(item)),
      paging: {
        limit: 0,
        offset: 0,
        total: result.length,
      },
    }
  }
}
