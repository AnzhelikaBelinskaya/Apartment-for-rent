
import Vue from 'vue'
import App from './App.vue'
import VueSocialSharing from 'vue-social-sharing'
import router from './router'
import store from './store'
import './translate'

 
Vue.use(VueSocialSharing);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store: store
}).$mount('#app');
