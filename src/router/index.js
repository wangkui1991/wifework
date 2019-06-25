/** @format */

import Vue from 'vue'
import Router from 'vue-router'

import ROUTES from './routers'
import { ROUTER_DEFAULT_CONFIG } from '@/config'
import {
  routerBeforeEachFunc,
  routerAfterEachFunc
} from '@/config/interceptor/router'

Vue.use(Router)

let routerInstance = new Router({
  ...ROUTER_DEFAULT_CONFIG,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: ROUTES
})

// 注入拦截器
routerInstance.beforeEach(routerBeforeEachFunc)
routerInstance.afterEach(routerAfterEachFunc)

export default routerInstance
