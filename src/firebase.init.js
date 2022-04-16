// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTJLDj45XsOrevotWB-lWXV3_SG-z51Rk",
  authDomain: "adventure-traveller.firebaseapp.com",
  projectId: "adventure-traveller",
  storageBucket: "adventure-traveller.appspot.com",
  messagingSenderId: "792110023521",
  appId: "1:792110023521:web:05df193785fc96d1bd3b20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth