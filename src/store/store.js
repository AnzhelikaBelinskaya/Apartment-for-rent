import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    lang: 'ru-RU',
  },
  mutations: {
    setLang(state, lang) {
      state.lang = lang
    },
  },
})
