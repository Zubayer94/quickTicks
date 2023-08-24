import db from "./config/database";
import { DB_FORCE, PORT } from "./config/envs";
import { createServer } from "./config/express";
import { logger } from "./config/logger";
import errorMiddleware from "./api/middlewares/error";

(async function startServer() {
  const app = createServer();

  await db.sync({ force: DB_FORCE == 'true' ? true : false})
    .then(() => { logger.info("Database connected"); })

  app.use(errorMiddleware);

  app.listen(PORT, () => {
    logger.info(`Listening on http://localhost:${PORT}`);
  });
})();
