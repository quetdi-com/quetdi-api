import { IAppRoute } from './interfaces/route.interface';
import { Router } from 'express';
import { AuthValidator } from '../validators/auth.validator';
import { AuthHttpController } from '../../inbound/auth.http-controller';

export class AuthRoute implements IAppRoute {
  private readonly controller: AuthHttpController;
  private readonly validator: AuthValidator;

  constructor(
    controller: AuthHttpController,
    validator: AuthValidator
  ) {
    this.controller = controller;

    this.validator = validator;
  }

  load(): Router {
    const router = Router();

    router.post('/login',
      this.validator.validateLoginRequest,
      this.controller.login
    );
    return router;
  }
}
