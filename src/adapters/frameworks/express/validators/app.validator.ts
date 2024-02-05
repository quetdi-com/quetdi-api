import { BaseValidator } from '../../../../shared/validators/base.validator';
import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export class AppValidator extends BaseValidator {
  public readonly validateColors: (req: Request, res: Response, next: NextFunction) => void = this.validate({
    headers: Joi.object({
      'access_token': Joi.string().required(),
      'refresh_token': Joi.string().required()
    })
  });
}
