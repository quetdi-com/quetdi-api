import Joi from 'joi';

import { get, join, toString } from 'lodash';
import { ApiException } from './api.exception';
import { IApiErrorOption, IErrorItem } from '../interfaces';
import { ErrorCode, ErrorId, JOI_MAPPING } from '../../constants';

export class JoiValidationException extends ApiException {
  constructor(details: Joi.ValidationErrorItem[], options: IApiErrorOption = {}) {
    const errors: IErrorItem[] = details.map((item: Joi.ValidationErrorItem) => {
      const idMapping = toString(get(JOI_MAPPING, item.type, ''));
      const errorId: ErrorId = ErrorId[idMapping as keyof typeof ErrorId];
      const field = join(item.path, '.');
      const message = get(item, 'message');

      return { errorId, field, message };
    });

    super({
      errorId: ErrorId.INVALID_PARAMETER,
      message: get(options, 'message', 'The format is not correct.'),
      code: get(options, 'code', ErrorCode.INVALID_PARAMETER),
      statusCode: 400,
      errors
    });
  }
}
