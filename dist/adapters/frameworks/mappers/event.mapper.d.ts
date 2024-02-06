import { Mapper } from '../../../shared/interfaces';
import { EventResponseDto } from '../../dtos/response/events.response';
import { Event } from '../../../domain/aggregates/event.agg';
export declare class EventMapper implements Mapper<Event, EventModel, EventResponseDto> {
    toDomain(record: EventModel): Event;
    toResponse(entity: Event): EventResponseDto;
    toRequest(entity: Event): EventModel;
}
