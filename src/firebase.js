// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbnmA4wEXihIj7j_GTL55PM4o1DyArTcs",
  authDomain: "todo-app-da4bb.firebaseapp.com",
  projectId: "todo-app-da4bb",
  storageBucket: "todo-app-da4bb.appspot.com",
  messagingSenderId: "164706859208",
  appId: "1:164706859208:web:8ca7881ef58d22b77ccdfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);