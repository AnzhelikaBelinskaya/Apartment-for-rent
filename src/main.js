import Vue from 'vue'
import App from './App.vue'
import VueSocialSharing from 'vue-social-sharing'
import VueRouter from 'vue-router'
import Apart from './components/Apart'
import Sightseeings from './components/Sightseeings'
import Transport from './components/Transport'
 
Vue.use(VueSocialSharing);
Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {path: '/', name: 'Apart', component: Apart},
        {path: '/sightseeings', name: 'Sightseeings', component: Sightseeings},
        {path: '/transport', name: 'Transport', component: Transport}
    ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
