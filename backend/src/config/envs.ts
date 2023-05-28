import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 5000
export const NODE_ENV = process.env.NODE_ENV
export const DB_HOST = process.env.DB_HOST
export const DB_NAME = process.env.DB_NAME
export const DB_PORT = process.env.DB_PORT
export const DB_USER = process.env.DB_USER
export const DB_PASS = process.env.DB_PASS
export const DB_LOGGING = process.env.DB_LOGGING
export const DB_FORCE = process.env.DB_FORCE



// const envs =  {
//     PORT: process.env.PORT,
//     NODE_ENV: process.env.NODE_ENV,
// }
// export default envs