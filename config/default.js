/// <reference types="shadow"/>

const path = require('node:path');

/** @type {Shadow.config} */
module.exports = {
  nazgul: {
    basePath: '/',
    server: {
      port: 8080,
      securePort: 443,
      static: './build',
    },
    session: {
      secretKey: 'MORDOR_SESSION_KEY',
    },
  },
  i18n: {
    app: 'mordor_web-scaffolding-ts',
    project: 'web-scaffolding',
    srcPath: path.join(__dirname, '/../app'),
    extNames: ['js', 'jsx', 'ts', 'tsx'],
  },
  assets: {
    prefix: '/',
  },
  mocksEnabled: true,
};
