import env from 'shadow/env';
import { config } from 'shadow/config';

if (!env.PRODUCTION) {
  import('shadow-dev/mocks')
    .then(({ Mock }) => {
      const mock = Mock();

      const ignoreParams = env.TEST
        ? ['referrer', 'navigation-type']
        : ['current_session_id', 'delete_sessions', 'platform_id'];

      mock.intercept('https://internal-api.catiabusiness.com', ['/sites/*'], {
        ignoreParams,
      });

      const mocksEnabled = env.TEST || (!env.PRODUCTION && config.mocksEnabled);

      if (mocksEnabled) {
        // Sessions api
        mock.intercept(
          'https://internal-api.catiabusiness.com',
          ['/auth/user_session*'],
          {
            ignoreParams: ['platform_id', 'site_id'],
            includeHeaders: ['x-session-id'],
          },
        );

        // Header Stuff
        mock.intercept(
          'https://internal-api.catiabusiness.com',
          ['/users/:userId/*'],
          {
            ignoreParams: [
              'access_token',
              'caller.id',
              'locale',
            ],
          },
        );

        // Navigation
        mock.intercept(
          'https://internal-api.catiabusiness.com',
          ['/frontend/*'],
          { ignoreParams: ['site_id', 'device'] },
        );

        // Catiadata Encryption
        mock.intercept('https://encryptionservice.catiaoffice.com', [
          '/catiadata/security/keys*',
        ]);

        // Generic interceptor
        mock.intercept('https://internal-api.catiabusiness.com/', ['*']);
      }
    })
    .catch((e: Error) => {
      // eslint-disable-next-line no-console
      console.error(
        `Couldn't import frontend-mock module. Error: ${e.message}`,
      );

      throw e;
    });
}
