// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import dotenv from 'dotenv'
dotenv.config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "ecomerce-56433.firebaseapp.com",
  projectId: "ecomerce-56433",
  storageBucket: "ecomerce-56433.appspot.com",
  messagingSenderId: "968499498104",
  appId: "1:968499498104:web:fbab1c34e1cbed033f718d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);