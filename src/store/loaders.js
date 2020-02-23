export default {
  state: {
    globalLoader: true,
    usersLoading: true,
  },
  getters: {
    globalLoader: state => state.globalLoader,
    usersLoading: state => state.usersLoading,
  },
  mutations: {
    globalLoader: (state, payload) => state.globalLoader = payload,
    usersLoading: (state, payload) => state.usersLoading = payload,
  },
  actions: {
    globalLoader: (state,payload) => state.commit('globalLoader', payload),
    usersLoading: (state,payload) => state.commit('usersLoading', payload),
  }
}
