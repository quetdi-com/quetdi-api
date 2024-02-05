import { get } from 'lodash';
import { ApiException } from './api.exception';
import { ErrorCode, ErrorId } from '../../constants';
import { IApiErrorOption } from '../interfaces';

export class InternalServerException extends ApiException {
  constructor(options: IApiErrorOption = {}) {
    super({
      message: get(options, 'message', 'Internal Server Error'),
      code: get(options, 'code', ErrorCode.INTERNAL_SERVER_ERROR),
      statusCode: 500,
      errorId: get(options, 'errorId', ErrorId.INTERNAL_SERVER_ERROR),
      errors: get(options, 'errors', [])
    });
  }
}
