import { get } from 'lodash';
import { ApiException } from './api.exception';
import { IApiErrorOption } from '../interfaces';
import { ErrorCode, ErrorId } from '../../constants';

export class NotFoundException extends ApiException {
  constructor(options: IApiErrorOption = {}) {
    super({
      message: get(options, 'message', 'Entity not found.'),
      code: get(options, 'code', ErrorCode.ENTITY_NOT_FOUND),
      statusCode: 404,
      errorId: get(options, 'errorId', ErrorId.ENTITY_NOT_FOUND),
      errors: get(options, 'errors', [])
    });
  }
}
