import type { RequestHandler, Request, Response, NextFunction } from 'express';

import { privateNavigationMiddleware } from 'web-private-navigation/core';
import { createLayoutMiddleware } from 'nazgul/layout';

export  const createPrivateNavigationMiddleware: RequestHandler = (
  req,
  res,
  next,
) => {
  if(req.auth.user) {
    const middlewares = privateNavigationMiddleware({
      withOutNavigation: true,
      shield: false,
    });

    const applyMiddlewares = (index: number) => {
      if(!middlewares) {
        next();

        return;
      }

      if(index >= middlewares.length) {
        next();
      } else {
        middlewares[index](req, res, () => applyMiddlewares(index +1));
      }
    };

    applyMiddlewares(0);
  } else {
    next();
  }
};

export const setLayoutMiddleware: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => createLayoutMiddleware({ navigation })(req, res, next);
