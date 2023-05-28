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