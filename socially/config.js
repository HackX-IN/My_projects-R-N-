// firebase config key

import firebase from 'firebase/compat/app' ;
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

//your web config

// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyAdN7Q8sFZUFz3ymbLxSuCfvazvF7IuAxM",
  authDomain: "authentication-651ab.firebaseapp.com",
  projectId: "authentication-651ab",
  storageBucket: "authentication-651ab.appspot.com",
  messagingSenderId: "1093471442599",
  appId: "1:1093471442599:web:7d264d9405d4089d4ead82",
  measurementId: "G-H4S0LVFPNP"
};

// Initialize Firebase
if(!firebase.apps.length){
   firebase.initializeApp(firebaseConfig);
}

export {firebase}
