import { EventsUsecase } from '../../../application/usecases/events.usecase';

export class EventsHttpController {
  private readonly eventUseCase: EventsUsecase;

  constructor(
    eventUseCase: EventsUsecase,
  ) {
    this.eventUseCase = eventUseCase;
  }

  fetchMyEvents = async (req, res, next): Promise<void> => {
    try {
      const meEvents = await this.eventUseCase.fetchMyEvents();
      res.json(meEvents);
    } catch (e) {
      next(e);
    }
  }
  addEvents = async (req, res, next): Promise<void> => {
    try {
      const meEvents = await this.eventUseCase.addEvents(req.body);
      res.json(meEvents);
    } catch (e) {
      next(e);
    }
  }
}
