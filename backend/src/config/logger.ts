import { createLogger, Logger, format, transports } from "winston"

const LoggerWrapper = (): Logger => {
  return createLogger({
    transports: [
      new transports.Console(),
      new transports.File({
          level: 'warn',
          filename: 'logs/logsWarnings.log'
      }),
      new transports.File({
          level: 'error',
          filename: 'logs/logsErrors.log'
      })
    ],
    format: format.combine(
      format.colorize(),
      format.timestamp(),
      // format.json(),
      format.splat(),
    format.simple(),
    ),
    
    exitOnError: false,
    silent: false // If true, all logs are suppressed
  });
};

export const logger = LoggerWrapper();