import { PORT } from "./config/envs";
import { createServer } from "./config/express"
import { logger } from "./config/logger";

(async function startServer() {
    const app = createServer();

    app.listen(PORT, () => {
        logger.info(`Listening on http://localhost:${PORT}`)
      })

})()