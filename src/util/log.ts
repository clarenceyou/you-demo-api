import * as winston from 'winston';

const level = process.env.LOG_LEVEL || 'info';

const options: winston.LoggerOptions = {
  level: level,
  transports: [
    new (winston.transports.Console)()
  ]
}

const log = new winston.Logger(options);

export = log;
