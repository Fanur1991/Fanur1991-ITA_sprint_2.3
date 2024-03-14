import { Request, Response, NextFunction } from 'express';

export const fibonacciTimer = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const startTime = process.hrtime();

  res.locals.startTime = startTime;

  next();
};
