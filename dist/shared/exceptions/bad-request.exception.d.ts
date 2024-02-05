import { ApiException } from './api.exception';
import { IApiErrorOption } from '../interfaces';
export declare class BadRequestException extends ApiException {
    constructor(options?: IApiErrorOption);
}
