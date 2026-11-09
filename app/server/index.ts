import Router from 'shadow/nazgul';
import { config } from 'shadow/config';
import { authMiddleware } from 'shadow/auth';
import { createShadowI18nMiddlewares } from 'shadow/i18n/middleware';
import '../../mocks';

import {
  setLayoutMiddleware,
  createPrivateNavigationMiddleware,
} from './middlewares/set-layout';

const router = Router.router();

const customAuuthorize = authMiddleware({
  allowAnonymous: true,
  allowWebviewAuthentication: true,
});

router.use(customAuuthorize);

router.use(createShadowI18nMiddlewares(config.i18n));

router.use(setLayoutMiddleware);

router.use(createPrivateNavigationMiddleware());

export default router;
