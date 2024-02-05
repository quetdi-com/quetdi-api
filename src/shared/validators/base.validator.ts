import Joi from 'joi';

import { NextFunction, Request, Response } from 'express';
import { isNil, set } from 'lodash';
import { InternalServerException, JoiValidationException } from '../exceptions';

export type ValidateSchema = {
  [key in RequestKey]?: Joi.ObjectSchema;
};

export type RequestKey = 'query' | 'body' | 'params' | 'headers';

export abstract class BaseValidator {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected validate = (validateSchema: ValidateSchema) => (req: Request, res: Response, next: NextFunction): void => {
    for (const key in validateSchema) {
      const valueToValidate = req[key as RequestKey];
      const schema: Joi.ObjectSchema | undefined = validateSchema[key as RequestKey];
      const { value: validatedHeaders } = Joi.object({
        unknown: Joi.any()
      }).validate(req.headers);

      req.headers = validatedHeaders; // Assign validated headers

      if (isNil(schema)) {
        throw new InternalServerException({
          message: 'Joi schema must be defined.'
        });
      }

      const { error, value: validatedValue } = schema.validate(valueToValidate, {
        abortEarly: false
      });

      set(req, key, validatedValue);

      if (error) {
        throw new JoiValidationException(error.details);
      }

    }

    return next();
  };
}
