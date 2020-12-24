// For Firebase JS SDK v7.20.0 and later
import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDGsorXtgvm8L4TzUt6TyUH-gTBZvdNUTU",
  authDomain: "valaced-5f40d.firebaseapp.com",
  projectId: "valaced-5f40d",
  storageBucket: "valaced-5f40d.appspot.com",
  messagingSenderId: "422059749108",
  appId: "1:422059749108:web:f6de1b6823218cde6ef8a1"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth,provider};
export default db;