import { BaseConfig } from './base.config';
import { IBaseConfig, IModuleConfig } from '../interfaces';

export abstract class ModuleConfig implements IModuleConfig {
  protected configs: {[key: string]: object} = {};
  abstract load(): void;

  public get<T>(configKey: string): T {
    return (this.configs[configKey] as BaseConfig<T>).get();
  }

  public set<T>(configKey: string, config: IBaseConfig<T>): void {
    this.configs[configKey] = config;
  }
}
