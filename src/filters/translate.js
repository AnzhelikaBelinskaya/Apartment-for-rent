import Vue from 'vue'
import { store } from '../store/store'

export const translate = Vue.filter('translate', function(text) {
  return text[store.state.lang]
})
