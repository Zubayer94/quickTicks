import * as E from 'express';

// export default asyncMiddleware;
export default function (handler: Function) {
	return async (req: E.Request, res: E.Response, next: E.NextFunction) => {
		try {
			await handler(req, res);
		} catch (ex) {
			next(ex);
		}
	}
}