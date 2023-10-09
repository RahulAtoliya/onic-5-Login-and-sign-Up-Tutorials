import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyCWBWnpwzK1g2iYsdpNyFby2XxorMNIIXk",
  authDomain: "ionic-login-337fa.firebaseapp.com",
  databaseURL: "https://ionic-login-337fa-default-rtdb.firebaseio.com",
  projectId: "ionic-login-337fa",
  storageBucket: "ionic-login-337fa.appspot.com",
  messagingSenderId: "452705487184",
  appId: "1:452705487184:web:f4baa0b85a0c9c75680455",
  measurementId: "G-CKS2E014LP"
  };



  firebase.initializeApp(firebaseConfig)


  export const firebaseAuth = firebase.auth