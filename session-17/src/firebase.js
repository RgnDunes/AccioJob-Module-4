import firebase from firebase;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAF9r3WZnUvCiAG84dBc2xfaCZDnDT9wB8",
    authDomain: "e-commerce-2009b.firebaseapp.com",
    projectId: "e-commerce-2009b",
    storageBucket: "e-commerce-2009b.appspot.com",
    messagingSenderId: "769888438701",
    appId: "1:769888438701:web:f6986c3d66936fcc65f924",
    measurementId: "G-TWTF7KJD5H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
    
  export default db;