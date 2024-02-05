import { Express, json, Request, Response, Router, urlencoded } from 'express';
import { IModuleRoute } from '../../../../shared/interfaces';
import { SupabaseDataSource } from '../../database/supabase';
import { locator } from '../../../../app.injector';
import { AppSettingRoute } from './app-setting.route';
import { AuthRoute } from './auth.route';

export class ModuleRoute implements IModuleRoute {
  initialize(app: Express): void {
    const router = Router();

    router.use(json());
    router.use(urlencoded({ extended: false }));

    this.load(router);
    app.use('/v1', router);

    app.get('/health', (_req: Request, res: Response) => {
      res.json('OK');
    });
  }

  load(router: Router): void {
    router.use('/app', locator.get(AppSettingRoute).load());
    router.use('/auth', locator.get(AuthRoute).load());
  }
}

export default new ModuleRoute();
