import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from '@/plugins/vuetify'
import router from './router'
import { rtdbPlugin } from "vuefire"
Vue.config.productionTip = false
Vue.use(rtdbPlugin)



new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
