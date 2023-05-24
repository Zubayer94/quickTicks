import { createLogger, Logger, format, transports } from "winston"

const LoggerWrapper = (): Logger => {
  return createLogger({
    transports: [
      new transports.Console(),
      new transports.File({
          level: 'warn',
          filename: 'logsWarnings.log'
      }),
      new transports.File({
          level: 'error',
          filename: 'logsErrors.log'
      })
    ],
    format: format.combine(
      format.colorize(),
      format.prettyPrint(),
      format.timestamp(),
      format.json()
    ),
    
    exitOnError: false,
    silent: false // If true, all logs are suppressed
  });
};

export const logger = LoggerWrapper();