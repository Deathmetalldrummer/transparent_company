import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';
import loaders from './loaders'
import auth from './auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loaders,
    auth,
  }
})
