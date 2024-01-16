// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD139zssoGsg3Q931zEcpfRSewk467S9hE",
  authDomain: "web3-blog-41715.firebaseapp.com",
  projectId: "web3-blog-41715",
  storageBucket: "web3-blog-41715.appspot.com",
  messagingSenderId: "648248490497",
  appId: "1:648248490497:web:2d8b9aed39bf9eed5a5e00",
  measurementId: "G-Y5WHV8HJRY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
