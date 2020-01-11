export default {
  state: {
    globalLoader: true
  },
  getters: {
    globalLoader: state => state.globalLoader,
  },
  mutations: {
    globalLoader: (state,payload) => state.globalLoader = payload,
  },
  actions: {
    globalLoader: (state,payload) => state.commit('globalLoader', payload)
  }
}
