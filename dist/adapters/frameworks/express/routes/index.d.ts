import { Express, Router } from 'express';
import { IModuleRoute } from '../../../../shared/interfaces';
export declare class ModuleRoute implements IModuleRoute {
    initialize(app: Express): void;
    load(router: Router): void;
}
declare const _default: ModuleRoute;
export default _default;
