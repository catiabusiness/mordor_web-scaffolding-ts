const path = require('node:path');

const STYLES_ENTRY_POINTS = require('./styleEntryPoints');

const ENTRY_POINTS = { ...STYLES_ENTRY_POINTS };

const entryPointsFamilies = Object.keys(ENTRY_POINTS).reduce (
  (accumulator, entrypointName) => {
    const filePath = ENTRY_POINTS[`${entrypointName}`];
    const fileExtension = path.extname(filePath);
    const isJavascript = fileExtension === '.ts' || fileExtension === '.tsx';

    if(isJavascript){
      accumulator.entryPoints[`${entrypointName}`] = [filePath];
    } else {
      accumulator.nonJsAssets[`${entrypointName}`] = [filePath];
    }

    return accumulator;
  },
  { entryPoints: {}, nonJsAssets: {}},
);

module.exports = {
  entryPointsFamilies,
};
