import type { RequestHandler } from 'express';

import Nazgul from 'shadow/Nazgul';
import { LoggerFactory } from 'shadow/LoggerFactory';

const demoRouter = Nazgul.router();
const logger = LoggerFactory('demo');

const demoMiddleware: RequestHandler = (req, res, next) => {
    logger.info(`demoMiddleware. Accessing URI: ${req.originalUrl}`);
    next();
};

demoRouter.use(demoMiddleware);

/**
 * /demo/platform endpoint
 */
demoRouter.get('/platform', (req, res) => {
    res.status(200).json({
        platform: req.platform,
    });
});

/**
 * /demo/user endpoint
 */
demoRouter.get('/user', (req, res) => {
    res.status(200).json({
        user: req.auth?.user,
    });
});

/**
 * /demo/device endpoint
 */
demoRouter.get('/device', (req, res) => {
    res.status(200).json({
        device: req.device,
    });
});

/**
 * /demo/browser endpoint
 */
demoRouter.get('/browser', (req, res) => {
    res.status(200).json({
        browser: req.browser,
    });
});

/**
 * Expose router
 */
export { demoRouter };
