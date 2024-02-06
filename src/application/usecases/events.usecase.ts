import { EventsResponseDto } from '../../adapters/dtos/response/events.response';

export interface EventsUsecase{
  fetchMyEvents(): Promise<EventsResponseDto>;
}
