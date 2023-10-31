// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgn5ZKeJitxqHVq_0Li_I_nJ9AV7h_7ew",
  authDomain: "fir-todo-app-da2bf.firebaseapp.com",
  projectId: "fir-todo-app-da2bf",
  storageBucket: "fir-todo-app-da2bf.appspot.com",
  messagingSenderId: "298843989744",
  appId: "1:298843989744:web:5867a1aa678e2faa43c435",
  measurementId: "G-3163LRXK7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);