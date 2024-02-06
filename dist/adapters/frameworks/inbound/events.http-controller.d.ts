import { EventsUsecase } from '../../../application/usecases/events.usecase';
export declare class EventsHttpController {
    private readonly eventUseCase;
    constructor(eventUseCase: EventsUsecase);
    fetchMyEvents: (req: any, res: any, next: any) => Promise<void>;
}