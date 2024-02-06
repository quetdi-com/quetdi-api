import { IAppRoute } from './interfaces/route.interface';
import { Router } from 'express';
import { EventsHttpController } from '../../inbound/events.http-controller';
import multer from 'multer';

export class EventsRoute implements IAppRoute {
  private readonly controller: EventsHttpController;

  constructor(
    controller: EventsHttpController,
  ) {
    this.controller = controller;
  }

  load(): Router {
    const upload = multer({
      storage: multer.memoryStorage(),
      limits: {
        fileSize: 8 * 1024 * 1024, // 2 MB
        files: 1,
      },
    });
    const router = Router();

    router.get('/me',
      this.controller.fetchMyEvents
    );
    router.post('/add',
      this.controller.addEvents
    );
    router.post('/uploadCoverImage',
      upload.single('image'),
      this.controller.uploadCoverImage
    );

    return router;
  }
}
