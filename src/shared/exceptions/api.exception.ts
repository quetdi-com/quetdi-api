import { IApiErrorOption, IErrorItem } from '../interfaces';
import { ErrorCode, ErrorId } from '../../constants';

// Use one error class for all places in project
export class ApiException extends Error implements IApiErrorOption {
  errorId?: string;
  code: string;
  statusCode: number;
  errors?: IErrorItem[] | [];

  constructor(options: IApiErrorOption) {
    super(options.message);
    this.errorId = options.errorId ?? ErrorId.INTERNAL_SERVER_ERROR;
    this.code = options.code ?? ErrorCode.INTERNAL_SERVER_ERROR;
    this.statusCode = options.statusCode ?? 500;
    this.errors = options.errors;
  }
}
