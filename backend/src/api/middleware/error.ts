import * as E from 'express';
import { logger } from '../../config/logger';

const errorMiddleware: E.ErrorRequestHandler = (err, req, res, next) => {
    res.status(500).json({
        success: false, 
        error: {
            message: 'internal server error'
        }
    })
    logger.error(err.message);
    next(err)
}
// export default errorMiddleware;

export default function (err: any, req: E.Request, res: E.Response, next: E.NextFunction) {
    res.status(500).json({
        success: false, 
        error: {
            message: 'internal server error'
        }
    })
    logger.error(err.message);
    next(err)
}