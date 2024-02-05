import { Router } from 'express';
export interface IAppRoute {
    load(): Router;
}
