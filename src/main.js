import Vue from 'vue'
import FastClick from 'fastclick'
import MetaInfo from 'vue-meta-info'
import App from './App'
import router from './router'
import store from './store'

let DOMAIN_NAME = ''
let SERVER_NAME = ''
let API_PREFIX = ''

if (process.env.NODE_ENV === 'development') {
  DOMAIN_NAME = ''
  SERVER_NAME = ''
  API_PREFIX = ''
  console.log('开发环境')
} else {
  console.log('发布环境')
  DOMAIN_NAME = ''
  SERVER_NAME = ''
  API_PREFIX = ''
}

Vue.use(MetaInfo)

Vue.prototype.DOMAIN_NAME = DOMAIN_NAME
Vue.prototype.SERVER_NAME = SERVER_NAME
Vue.prototype.API_PREFIX = API_PREFIX

Vue.config.productionTip = false

FastClick.attach(document.body)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
})

