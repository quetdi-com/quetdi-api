import { IBaseConfig, IModuleConfig } from '../interfaces';
export declare abstract class ModuleConfig implements IModuleConfig {
    protected configs: {
        [key: string]: object;
    };
    abstract load(): void;
    get<T>(configKey: string): T;
    set<T>(configKey: string, config: IBaseConfig<T>): void;
}
