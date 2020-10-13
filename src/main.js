// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'xa-css'
import * as utils from './utils'
import * as Runtime from './utils/runtime'
import toast from 'components/toast'
import '@/assets/common.scss'

Vue.prototype.$toast = toast()
Vue.prototype.$utils = utils
Vue.prototype.$runtime = Runtime
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
