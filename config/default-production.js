/// <reference types="shadow"/>

const { name } = require('../package.json');

const { APPLICATION } = process.env;

/** @type {Shadow.Config} */
module.exports = {
  assets: {
    prefix: `https://http2.cbstatic.com/frontend-assets/${
      APPLICATION || name
    }`,
  },
};
