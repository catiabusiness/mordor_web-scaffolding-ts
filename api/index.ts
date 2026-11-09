import Nazgul from 'shadow/nazgul';

import { demoRouter } from './demo';

const apiRouter = Nazgul.router();

/**
 * Demo router
 */
apiRouter.use('/demo', demoRouter);

export default apiRouter;
