import Vue from 'vue'
import App from './App.vue'
import VueSocialSharing from 'vue-social-sharing'
import { router } from './router/router'
import { store } from './store/store'
import { translate } from './filters/translate'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueSocialSharing)

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  render: (h) => h(App),
  router,
  store: store,
  translate,
}).$mount('#app')
