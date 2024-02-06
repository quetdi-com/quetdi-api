import { IAppRoute } from './interfaces/route.interface';
import { Router } from 'express';
import { AppSettingHttpController } from '../../inbound/app-setting.http-controller';
import { AppValidator } from '../validators/app.validator';

export class AppSettingRoute implements IAppRoute{
  private readonly controller: AppSettingHttpController;
  private  readonly  validator: AppValidator;
  constructor(
    controller: AppSettingHttpController,
    validator: AppValidator
  ) {
    this.controller = controller;
    this.validator = validator;
  }

  load(): Router {
    const router = Router();

    router.get('/colors',
      this.controller.getColors
    );
    return router;
  }
}
