import Vue from 'vue'
import VueRouter from 'vue-router'
import Apart from '../components/Apart'
import Attractions from '../components/Attractions'
import Transport from '../components/Transport'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    { path: '/', name: 'apart', component: Apart},
    { path: '/attractions', name: 'attractions', component: Attractions },
    { path: '/transport', name: 'transport', component: Transport},

  ],
})
export const routes = router.options.routes.map(route => {return {name: route.name}})
console.log(routes)