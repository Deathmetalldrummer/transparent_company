import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyCtXnFRUV8K92ihAbUBmpR2jgSiaEUpTtY",
  authDomain: "transparent-4b3d0.firebaseapp.com",
  databaseURL: "https://transparent-4b3d0.firebaseio.com",
  projectId: "transparent-4b3d0",
  storageBucket: "transparent-4b3d0.appspot.com",
  messagingSenderId: "683319389176",
  appId: "1:683319389176:web:90fbda193bfd4e9673840d",
  measurementId: "G-EBD6514XX7"
};




firebase.initializeApp(firebaseConfig);

let storage = firebase.storage();
let db = firebase.firestore();
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created: () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        store.dispatch('currentUser', user.uid);
      }
      store.dispatch('globalLoader', false);
    })
  }
}).$mount('#app')
