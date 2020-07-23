import Vue from 'vue'
import store from './store'

Vue.filter('translate', function (text) {
        return text[store.state.lang];
    })
