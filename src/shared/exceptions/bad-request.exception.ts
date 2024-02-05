import { get } from 'lodash';
import { ApiException } from './api.exception';
import { IApiErrorOption } from '../interfaces';
import { ErrorCode, ErrorId } from '../../constants';

export class BadRequestException extends ApiException {
  constructor(options: IApiErrorOption = {}) {
    super({
      message: get(options, 'message', 'Bad request.'),
      code: get(options, 'code', ErrorCode.BAD_REQUEST),
      statusCode: 400,
      errorId: get(options, 'errorId', ErrorId.BAD_REQUEST),
      errors: get(options, 'errors', [])
    });
  }
}
