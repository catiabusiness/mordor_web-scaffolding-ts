const { createConfig, entryPoint } = require('shadow-dev/building_blocks');
const classicPreset = require('shadow-dev/building_blocks/presets/classic');

const { entryPointsFamilies } = require('./webpack/webpackEntryPointsConfig');
const { name } = require('./package.json');

const { APPLICATION } = process.env;

const config = createConfig([
  entryPoint({
    ...entryPointsFamilies.entryPoints,
    ...entryPointsFamilies.nonJsAssets,
  }),
  classicPreset({
    buildPath: 'build',
    publicPath: `https://http2.cbstatic.com/frontend-assets/${
      APPLICATION || name
    }/`,
  }),
]);

module.exports = config
