import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueSocialSharing from 'vue-social-sharing'
import VueRouter from 'vue-router'
import Apart from './components/Apart'
import Attractions from './components/Attractions'
import Transport from './components/Transport'
 
Vue.use(VueSocialSharing);
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    lang: 'ru-RU',
  },
  mutations: {
    switchToRu (state) {
      state.lang = 'ru-RU';
    },
    switchToEng (state) {
      state.lang = 'en-US';
  }
}
});

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
  router,
  store: store
}).$mount('#app');
