// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import router from './router.js'
import VueAnalytics from 'vue-analytics'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'



Vue.config.productionTip = false
Vue.use(Vuetify, {
 iconfont: 'fa'
})

Vue.use(VueAnalytics, {
  id: 'UA-131254399-1',
  router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>',
  data: {

  }
})
