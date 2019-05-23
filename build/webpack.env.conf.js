/** @format */
const argv = require('yargs').argv;
const NODE_ENV = argv.env;

let envConfig = `../config/dev.env.js`;

if (NODE_ENV) {
  envConfig = `../config/${NODE_ENV}.env.js`;
}

module.exports = require(envConfig);
