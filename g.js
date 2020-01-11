var fs = require('fs');
var firebase = require('firebase');
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

let auth = firebase.auth();

auth.createUserWithEmailAndPassword('user_00100@it.io', '111111111')
.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
    
});