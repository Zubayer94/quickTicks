import * as E from 'express';
import { logger } from '../../config/logger';

// export default errorMiddleware;
export default function (err: any, req: E.Request, res: E.Response, next: E.NextFunction)  {
    res.status(500).json({
        success: false, 
        error: {
            message: 'internal server error'
        }
    })
    logger.error(err.message);
    next(err)
}

// import * as E from 'express';
// import { logger } from '../../utils/logger';

// export default function() {
//     return  (err, req, res, next) : E.ErrorRequestHandler => {
//         logger.error(err);
//         res.status(500).send('Something went wrong');
//     };
// }

// const errorHandler: E.ErrorRequestHandler = (err, req, res, next) => { 
//     logger.error(err);
//     res.status(500).send('Something went wrong');
//     next()
// }
