import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {

  apiKey: "AIzaSyB7n0Um8LM5zGCEqBOLwkChS_ZfaIBVcbE",

  authDomain: "ikea-clone-730c9.firebaseapp.com",

  projectId: "ikea-clone-730c9",

  storageBucket: "ikea-clone-730c9.appspot.com",

  messagingSenderId: "1061841140584",

  appId: "1:1061841140584:web:031f7b823967174171b4dd"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

  export default firebase;