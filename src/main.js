import Vue from 'vue'
import App from './App.vue'
import VueSocialSharing from 'vue-social-sharing'
import VueRouter from 'vue-router'
import Apart from './components/Apart'
import Attractions from './components/Attractions'
import Transport from './components/Transport'
 
Vue.use(VueSocialSharing);
Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {path: '/', name: 'Apart', component: Apart},
        {path: '/attractions', name: 'Attractions', component: Attractions},
        {path: '/transport', name: 'Transport', component: Transport},
    ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
