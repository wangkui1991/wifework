/** @format */
import 'babel-polyfill'
import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'
import App from './App'
import '@/assets/css/common.css'
// 导入插件
import plugin from '@/plugins'
import router from '@/router'
import store from '@/store'

import { Table, TableColumn } from 'element-ui'
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
