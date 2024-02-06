import { IAppRoute } from './interfaces/route.interface';
import { Router } from 'express';
import { EventsHttpController } from '../../inbound/events.http-controller';
export declare class EventsRoute implements IAppRoute {
    private readonly controller;
    constructor(controller: EventsHttpController);
    load(): Router;
}
