import { Dialect, Model, Sequelize } from 'sequelize'
import { logger } from './logger'
import { DB_HOST, DB_LOGGING, DB_NAME, DB_PASS, DB_USER } from './envs'


const sequelize = new Sequelize({
    host: DB_HOST,
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASS,
    dialect: 'mysql',
    logging: DB_LOGGING ? (msg: any) => logger.debug(msg) : false,
})

sequelize.authenticate().then(() => {
    logger.info('Connection has been established successfully.');
 }).catch((error: any) => {
    logger.error('Unable to connect to the database: ', error);
 });

// logging: msg => logger.debug(msg),     // Use custom logger (e.g. Winston or Bunyan), displays the first parameter
