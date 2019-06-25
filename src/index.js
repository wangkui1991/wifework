/** @format */
import 'babel-polyfill'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/animate.min.css'
import './assets/fonts/SourceHanSans-Normal/SourceHanSans-Normal.css'
import './assets/fonts/SourceHanSans-Regular/SourceHanSans-Regular.css'
import './assets/fonts/SourceHanSans-Light/SourceHanSans-Light.css'
import './assets/fonts/SourceHanSans-Bold/SourceHanSans-Bold.css'

import Vue from 'vue'
import VueWaypoint from 'vue-waypoint'
import App from './App'
import '@/assets/css/common.css'
// 导入插件
import plugin from '@/plugins'
import router from '@/router'
import store from '@/store'

import { Table, TableColumn } from 'element-ui'
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
