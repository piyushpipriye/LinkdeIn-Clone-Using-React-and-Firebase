import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "linkdein-1ebfb.firebaseapp.com",
  projectId: "linkdein-1ebfb",
  storageBucket: "linkdein-1ebfb.appspot.com",
  messagingSenderId: "777081879832",
  appId: "1:777081879832:web:7336c5935c11289efb326d",
  measurementId: "G-L7V282NG1V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider ,storage};
export default db;
