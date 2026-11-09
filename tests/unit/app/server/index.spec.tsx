import Nazgul from 'shadow/nazgul';

import MainRouter from '../../../../app/server';

jest.mock('../../../../mocks', () => ({}));

jest.mock('shadow/i18n/middleware', () => ({
  createShadowI18nMiddlewares: jest.fn(() => 'i18n-middleware'),
}));

jest.mock('shadow/auth', () => ({
  authMiddleware: jest.fn(() => 'auth-middleware'),
}));

jest.mock('../../../../app/server/middlewares/set-layout', () => ({
  setLayoutMiddleware: 'layout-middleware',
  createPrivateNavigationMiddleware: jest.fn(
    () => 'private-navigation-middleware',
  ),
}));

jest.mock('shadow/nazgul', () => ({
  __esModule: true,
  default: {
    router: jest.fn(() => ({
      use: jest.fn(),
    })),
  },
}));

jest.mock('shadow/config', () => ({
  config: {
    i18n: { locale: 'es-AR' },
  },
}));

describe('Server setup', () => {
  test('creates the router and mounts the server middleware stack', () => {
    expect(Nazgul.router).toHaveBeenCalledTimes(1);
    expect(MainRouter.use).toHaveBeenCalledTimes(4);
    expect(MainRouter.use).toHaveBeenNthCalledWith(1, 'auth-middleware');
    expect(MainRouter.use).toHaveBeenNthCalledWith(2, 'i18n-middleware');
    expect(MainRouter.use).toHaveBeenNthCalledWith(3, 'layout-middleware');
    expect(MainRouter.use).toHaveBeenNthCalledWith(
      4,
      'private-navigation-middleware',
    );
  });
});
