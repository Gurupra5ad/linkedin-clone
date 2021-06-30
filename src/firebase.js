import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDV-mWqs3kn1WCc3MKpEd_AOHpBh9FodBM",
    authDomain: "linkedin-clone-a5444.firebaseapp.com",
    projectId: "linkedin-clone-a5444",
    storageBucket: "linkedin-clone-a5444.appspot.com",
    messagingSenderId: "211906623507",
    appId: "1:211906623507:web:db38d7f0eb257e770267e6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};