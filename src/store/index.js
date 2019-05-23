/** @format */

import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'

import createLogger from 'vuex/dist/logger'

import { VUEX_DEFAULT_CONFIG } from '@/config'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  ...VUEX_DEFAULT_CONFIG,
  modules: {
    app
  },
  getters,
  plugins: debug ? [createLogger()] : []
})
