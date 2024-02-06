import { EventsUsecase } from '../usecases/events.usecase';
import { EventsRepository } from '../../domain/events.repository';
import { EventMapper } from '../../adapters/frameworks/mappers/event.mapper';
import { EventResponseDto, EventsResponseDto } from '../../adapters/dtos/response/events.response';
import { Event } from '../../domain/aggregates/event.agg';
import multer from 'multer';
export declare class EventsService implements EventsUsecase {
    private readonly repository;
    private readonly eventMapper;
    constructor(repository: EventsRepository, eventMapper: EventMapper);
    addEvents(event: Event): Promise<EventResponseDto>;
    uploadCoverImage(file: multer.File): Promise<string>;
    fetchMyEvents(): Promise<EventsResponseDto>;
}
