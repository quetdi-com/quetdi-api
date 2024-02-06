import { ModuleConfig } from './shared/configs/module.config';
import { ServiceLocator } from './shared/locator';
import { SupabaseDataSource } from './adapters/frameworks/database/supabase';
import { AppSettingHttpController } from './adapters/frameworks/inbound/app-setting.http-controller';
import { AppSettingRepository } from './domain/app-setting.repository';
import { AppSettingService } from './application/services/app-setting.service';
import { ColorsMapper } from './adapters/frameworks/mappers/colors.mapper';
import { AppSettingRoute } from './adapters/frameworks/express/routes/app-setting.route';
import { AuthRoute } from './adapters/frameworks/express/routes/auth.route';
import { AuthHttpController } from './adapters/frameworks/inbound/auth.http-controller';
import { AuthValidator } from './adapters/frameworks/express/validators/auth.validator';
import { AppValidator } from './adapters/frameworks/express/validators/app.validator';
import { EventsHttpController } from './adapters/frameworks/inbound/events.http-controller';
import { EventsRoute } from './adapters/frameworks/express/routes/events.route';
import { EventsService } from './application/services/events.service';
import { EventsRepository } from './domain/events.repository';
import { EventMapper } from './adapters/frameworks/mappers/event.mapper';

export const register = (config: ModuleConfig): void => {
  const locator = ServiceLocator.instance;
  locator.register(SupabaseDataSource, () => new SupabaseDataSource(config));

  // validator
  locator.register(AuthValidator, () => new AuthValidator());
  locator.register(AppValidator, () => new AppValidator());


  //Mapper
  locator.register(ColorsMapper, () => new ColorsMapper());
  locator.register(EventMapper, () => new EventMapper());


  //repository
  locator.register(AppSettingRepository, () => new AppSettingRepository(locator.get(SupabaseDataSource), locator.get(ColorsMapper)));
  locator.register(EventsRepository, () => new EventsRepository(locator.get(SupabaseDataSource), locator.get(EventMapper)));


  //service
  locator.register(AppSettingService, () => new AppSettingService(locator.get(AppSettingRepository), locator.get(ColorsMapper)));
  locator.register(EventsService, () => new EventsService(locator.get(EventsRepository), locator.get(EventMapper)));


  // controller
  locator.register(AppSettingHttpController, () => new AppSettingHttpController(locator.get(AppSettingService)));
  locator.register(AuthHttpController, () => new AuthHttpController(locator.get(SupabaseDataSource)));
  locator.register(EventsHttpController, () => new EventsHttpController(locator.get(EventsService)));


  // route
  locator.register(AppSettingRoute, () => new AppSettingRoute(locator.get(AppSettingHttpController), locator.get(AppValidator)));
  locator.register(AuthRoute, () => new AuthRoute(locator.get(AuthHttpController), locator.get(AuthValidator)));
  locator.register(EventsRoute, () => new EventsRoute(locator.get(EventsHttpController)));

}
export const locator = ServiceLocator.instance;
