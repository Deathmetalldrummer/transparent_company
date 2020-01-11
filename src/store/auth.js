import firebase from 'firebase';

export default {
  state: {
    currentUser: null,
  },
  getters: {
    currentUser: state => state.currentUser,
  },
  mutations: {
    currentUser: (state,payload) => state.currentUser = payload,
    logOut: state => state.currentUser = null
  },
  actions: {
    currentUser: (state,payload) => state.commit('currentUser', payload),
    logIn: (state,payload) => {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(respond=>{
        state.commit('currentUser', respond.user.uid);
      })
      .catch(error=>{
          console.log(error);
      })
    },
    logOut: state => {
      firebase.auth().signOut().then(respond=>{
          state.commit('logOut');
      })
      .catch(error=>{
          console.log(error);
      })
    },
  }
}
