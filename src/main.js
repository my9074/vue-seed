// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import VueProgressBar from 'vue-progressbar'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(VueProgressBar)

Vue.filter('arr2string', value => value.join(' / '))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
