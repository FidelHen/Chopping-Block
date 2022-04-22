// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4yulgDS54PwC-VYcuMcS_g3RL-maDnIg",
  authDomain: "chopping-block-e1464.firebaseapp.com",
  projectId: "chopping-block-e1464",
  storageBucket: "chopping-block-e1464.appspot.com",
  messagingSenderId: "545276594877",
  appId: "1:545276594877:web:60434bd2a7d45fd78b45d4",
  measurementId: "G-TNHMV49BV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
