import { ApiException } from './api.exception';
import { IApiErrorOption } from '../interfaces';
export declare class UnauthorizedException extends ApiException {
    constructor(options?: IApiErrorOption);
}
