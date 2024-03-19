import { Express, json, Request, Response, Router, urlencoded } from 'express';
import { IModuleRoute } from '../../../../shared/interfaces';
import { locator } from '../../../../app.injector';
import { AppSettingRoute } from './app-setting.route';
import { AuthRoute } from './auth.route';
import { EventsRoute } from './events.route';

export class ModuleRoute implements IModuleRoute {
  initialize(app: Express): void {
    const router = Router();

    router.use(json());
    router.use(urlencoded({ extended: false }));

    this.load(router);
    app.use('/v1', router);

    app.get('/dynamic-qr', (_req, res) => {
      let { amount } = _req.query;
      let { txt } = _req.query;
      let priceLength = amount.length;
      let priceCode = '54' + this.formatStringLength(amount.toString()) + amount.toString();
      let text = txt.toString().slice(0, -8) + priceCode + '6304'
      res.json(text + this.calculateCRC(text).toString(16));
    });

    app.get('/health', (_req: Request, res: Response) => {
      res.json('OK');
    });
  }

  load(router: Router): void {
    router.use('/app', locator.get(AppSettingRoute).load());
    router.use('/events', locator.get(EventsRoute).load());
    router.use('/auth', locator.get(AuthRoute).load());
  }

  calculateCRC(text: string): number {
    let crc = 0xFFFF;

    for (let i = 0; i < text.length; i++) {
      crc ^= text.charCodeAt(i) << 8;

      for (let j = 0; j < 8; j++) {
        if ((crc & 0x8000) !== 0) {
          crc = (crc << 1) ^ 0x1021;
        } else {
          crc <<= 1;
        }
      }
    }

    return crc & 0xFFFF;
  }

  formatStringLength(str: string): string {
    const length = str.length;
    if (length < 10) {
      return '0' + length.toString();
    } else {
      return length.toString();
    }
  }

}

export default new ModuleRoute();
