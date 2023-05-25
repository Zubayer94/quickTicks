import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

const createServer = (): express.Application => {
  const app = express();
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  });

  app.use(helmet());
  app.use(limiter);
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(
    cors({
        origin: '*' // allowed all origin
        // origin: "https://www.section.io", // or specific origin
        // origin: ['https://www.section.io', 'https://www.google.com/'] // or allow array of origin
    })
  );

  app.disable("x-powered-by");

  app.get("/", (_req, res) => {
    res.send("UP");
  });

  return app;
};

export { createServer };
