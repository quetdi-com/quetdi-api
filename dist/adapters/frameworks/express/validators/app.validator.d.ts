import { BaseValidator } from '../../../../shared/validators/base.validator';
import { NextFunction, Request, Response } from 'express';
export declare class AppValidator extends BaseValidator {
    readonly validateColors: (req: Request, res: Response, next: NextFunction) => void;
}
