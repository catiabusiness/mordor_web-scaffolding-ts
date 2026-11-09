# web-scaffolding-ts

> Brief project description

## Environment setup

- Install [Node.js](https://nodejs.org/)
  - Recommended method is by  using [NVM](https://github.com/creationix/nvm)
  - Recommended Node.js version is the latest supported version in [Catia's Docker images](https://github.com/catiabusiness/mordor_distroless-node?tab=readme-ov-file#supported-tags)
  - **While staying conneted to VPN**, run `npm install` to install the project dependencies
  - For the e2e tests install locally selenium, chromdriver and geckodriver  by running `npm run install-selenium`
  - Edit your `/etc/hosts` file by adding virtual hosts required for the app running:

These ar just examples, please indicate the real list of domains that is used in project.

```txt
  127.0.0.1 localhost
  ::1 localhost
  127.0.0.1 localhost.com
  127.0.0.1 localhost.com.ar
  127.0.0.1 dev.catiabusiness.com.ar 
```

- You may find convenient editing your `.bash_profile` to [auto pick the Node version](https://mordor.admincb.com/docs/requirements#selector-autom%C3%A1tico-de-versi%C3%B3n-opcional) of each project.

## Development

### 1) Run and build the app

```sh
npm run dev
```

**Note**: Running this command you will be using React Fast Refresh and Hot Reload Server, [please follow this documentation](https://mordor.admincb.com/docs/fast-refresh) for more information and recommendations of usage.

### 2) Download translations

```sh
npm run i18n:download
```

**Note**: To proceed with this step the project should be properly configured first. Please see the [`i18n` configuration  instruction](https://github.com/catiabusiness/mordor_frontend-i18n/#configuration) for more info.

### 3) Install the certificate authority if you didn't before

Run from this application **for a single time** the command:

```sh
./node_modules/.bin/install-devcert-ca
```

> Please note that `sudo` password is required for this operation.

**Note**: if your app should run over HTTP please remove `NODE_HTTPS=true` from the npm scripts.

```json
"dev": "NODE_ENV=development node ./index.js"
```

### 4) Navigate to

```http
https://dev.catiabusiness.com.ar:8443/
```

## Debug

### 1) Build the assets

```sh
npm run build
```

_Alternatively you may use the watcher for automatic assets rebuilding: `npm run watch`_

### 2) Run the app with the debug mode

```sh
npm run debug
```

## License

© 2026 Catia Busieness
