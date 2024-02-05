import { BaseValidator } from '../../../../shared/validators/base.validator';
import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export class AuthValidator extends BaseValidator {
  public readonly validateLoginRequest: (req: Request, res: Response, next: NextFunction) => void = this.validate({
    body: Joi.object({
      idToken: Joi.string().required()
    })
  });
}
