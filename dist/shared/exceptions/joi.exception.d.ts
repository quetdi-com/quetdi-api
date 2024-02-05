import Joi from 'joi';
import { ApiException } from './api.exception';
import { IApiErrorOption } from '../interfaces';
export declare class JoiValidationException extends ApiException {
    constructor(details: Joi.ValidationErrorItem[], options?: IApiErrorOption);
}
