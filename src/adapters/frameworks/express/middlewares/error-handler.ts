import { get } from 'lodash';
import { NextFunction, Request, Response } from 'express';
import { ErrorCode, ErrorId } from '../../../../constants';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, max-params
export default (error: Error, _req: Request, res: Response, _next: NextFunction): Response => {
  return res.status(get(error, 'statusCode', 500)).json({
    errorId: get(error, 'errorId', ErrorId.INTERNAL_SERVER_ERROR),
    code: get(error, 'code', ErrorCode.INTERNAL_SERVER_ERROR),
    message: get(error, 'message', 'Internal Server Error!'),
    errors: get(error, 'errors', [])
  });
};
