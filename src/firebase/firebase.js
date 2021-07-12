import firebase from 'firebase';

const firebaseApp = firebase.initializeApp( {
    apiKey: "",
    authDomain: "selfteacher-e5e6c.firebaseapp.com",
    projectId: "selfteacher-e5e6c",
    storageBucket: "selfteacher-e5e6c.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  });

  const auth = firebaseApp.auth();

  export {auth};