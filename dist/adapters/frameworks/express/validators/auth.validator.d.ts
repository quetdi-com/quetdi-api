import { BaseValidator } from '../../../../shared/validators/base.validator';
import { NextFunction, Request, Response } from 'express';
export declare class AuthValidator extends BaseValidator {
    readonly validateLoginRequest: (req: Request, res: Response, next: NextFunction) => void;
}
