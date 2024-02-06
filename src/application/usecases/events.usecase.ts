import { EventResponseDto, EventsResponseDto } from '../../adapters/dtos/response/events.response';
import { Event } from '../../domain/aggregates/event.agg';

export interface EventsUsecase{
  fetchMyEvents(): Promise<EventsResponseDto>;
  addEvents(event: Event): Promise<EventResponseDto>;
}
