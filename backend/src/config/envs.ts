import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 5000
export const NODE_ENV = process.env.NODE_ENV



// const envs =  {
//     PORT: process.env.PORT,
//     NODE_ENV: process.env.NODE_ENV,
// }
// export default envs