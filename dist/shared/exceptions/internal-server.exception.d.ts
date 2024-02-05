import { ApiException } from './api.exception';
import { IApiErrorOption } from '../interfaces';
export declare class InternalServerException extends ApiException {
    constructor(options?: IApiErrorOption);
}
