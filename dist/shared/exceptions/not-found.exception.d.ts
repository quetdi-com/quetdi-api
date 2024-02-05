import { ApiException } from './api.exception';
import { IApiErrorOption } from '../interfaces';
export declare class NotFoundException extends ApiException {
    constructor(options?: IApiErrorOption);
}
