import { get } from 'lodash';
import { ApiException } from './api.exception';
import { IApiErrorOption } from '../interfaces';
import { ErrorCode, ErrorId } from '../../constants';

export class UnauthorizedException extends ApiException {
  constructor(options: IApiErrorOption = {}) {
    super({
      message: get(options, 'message', 'User is not authorized.'),
      code: get(options, 'code', ErrorCode.UNAUTHORIZED),
      statusCode: 401,
      errorId: get(options, 'errorId', ErrorId.UNAUTHORIZED),
      errors: get(options, 'errors', []),
    });
  }
}
