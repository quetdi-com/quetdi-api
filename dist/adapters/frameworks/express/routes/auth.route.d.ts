import { IAppRoute } from './interfaces/route.interface';
import { Router } from 'express';
import { AuthValidator } from '../validators/auth.validator';
import { AuthHttpController } from '../../inbound/auth.http-controller';
export declare class AuthRoute implements IAppRoute {
    private readonly controller;
    private readonly validator;
    constructor(controller: AuthHttpController, validator: AuthValidator);
    load(): Router;
}
