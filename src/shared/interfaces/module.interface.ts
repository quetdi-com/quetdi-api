import { BaseConfig } from '../configs';
import { IBaseConfig } from './base.interface';
import { Express, Router } from 'express';

export interface IModuleConfig {
  load(): void;
  get<T>(configKey: string): BaseConfig<T>;
  set<T>(configKey: string, config: IBaseConfig<T>): void;
}

export interface IModuleRoute {
  initialize(app: Express): void;
  load(router: Router): void;
}
