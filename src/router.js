
import Vue from 'vue'
import VueRouter from 'vue-router'
import Apart from './components/Apart'
import Attractions from './components/Attractions'
import Transport from './components/Transport'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', name: 'Apart', component: Apart },
        { path: '/attractions', name: 'Attractions', component: Attractions },
        { path: '/transport', name: 'Transport', component: Transport },
    ]
})
