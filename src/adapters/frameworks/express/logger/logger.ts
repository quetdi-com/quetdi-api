import * as winston from 'winston';
import { format, Logger } from 'winston';

export const transports = (module: string): Logger => {

  return winston.createLogger({
    level: 'info',
    transports: new winston.transports.Console(),
    format: format.combine(
      format.label({label: module}),
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      format.simple()
    )
  });

};
