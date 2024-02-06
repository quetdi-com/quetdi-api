import { IAppRoute } from './interfaces/route.interface';
import { Router } from 'express';
import { EventsHttpController } from '../../inbound/events.http-controller';

export class EventsRoute implements IAppRoute {
  private readonly controller: EventsHttpController;

  constructor(
    controller: EventsHttpController,
  ) {
    this.controller = controller;
  }

  load(): Router {
    const router = Router();

    router.get('/me',
      this.controller.fetchMyEvents
    );
    return router;
  }
}
