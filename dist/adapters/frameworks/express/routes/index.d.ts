import { Express, Router } from 'express';
import { IModuleRoute } from '../../../../shared/interfaces';
export declare class ModuleRoute implements IModuleRoute {
    initialize(app: Express): void;
    load(router: Router): void;
    calculateCRC(text: string): number;
    formatStringLength(str: string): string;
}
declare const _default: ModuleRoute;
export default _default;
