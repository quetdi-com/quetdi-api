import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';
export type ValidateSchema = {
    [key in RequestKey]?: Joi.ObjectSchema;
};
export type RequestKey = 'query' | 'body' | 'params' | 'headers';
export declare abstract class BaseValidator {
    protected validate: (validateSchema: ValidateSchema) => (req: Request, res: Response, next: NextFunction) => void;
}
