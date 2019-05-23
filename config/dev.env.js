/** @format */

'use strict';

var merge = require('webpack-merge');
var prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"/"', //API地址
  IS_MOCK: false, //是否使用 mock
  MOCK_URL: '"http://yapi.demo.qunar.com/mock/12982/flytest/v1"', //mock平台地址
  USE_PROXY: true // 是否开启代理
});