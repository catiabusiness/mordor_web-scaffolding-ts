import type { Request, Response, NextFunction } from 'express';
import type { HttpError } from 'http-errors';

export const onPageError = (
  err: HttpError,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(err.status);
  next(err);
}
