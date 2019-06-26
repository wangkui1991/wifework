/** @format */
import 'babel-polyfill'
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css/animate.min.css'
import './assets/fonts/SourceHanSan.css'
import '@/assets/css/common.css'

import Vue from 'vue'
import VueWaypoint from 'vue-waypoint'
import FastClick from 'fastclick'
import App from './App'
// 导入插件
import plugin from '@/plugins'
import router from '@/router'
import store from '@/store'

import { Table, TableColumn } from 'element-ui'
FastClick.attach(document.body)
Vue.use(VueWaypoint)
Vue.use(Table)
Vue.use(TableColumn)

Vue.config.productionTip = false

Vue.use(plugin)

Vue.filter('upper', function(value) {
  return value.toLocaleUpperCase()
})

new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
