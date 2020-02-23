import firebase from 'firebase';

export default {
  state: {
    usersList: null
  },
  getters: {
    usersList: state=>state.usersList
  },
  mutations: {
    usersList: (state,payload)=> state.usersList = payload,
  },
  actions: {
    usersList: state => {
      firebase.firestore().collection('users').doc('list').get().then(respond=>{
        if (respond.exists) {
          state.commit('usersList',respond.data());
          state.commit('usersLoading',false);
        } else {
          // respond.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch(error=>{
          console.log(error)
      });
    }

  }
}
