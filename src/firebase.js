import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDc-3Z5ux3dtKZbTDjZAfupmtyS1lKxNtI",
  authDomain: "clone-2153e.firebaseapp.com",
  projectId: "clone-2153e",
  storageBucket: "clone-2153e.appspot.com",
  messagingSenderId: "1057597657553",
  appId: "1:1057597657553:web:10f2232018ab7c532710f0",
  measurementId: "G-3JT3CQEEJC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };