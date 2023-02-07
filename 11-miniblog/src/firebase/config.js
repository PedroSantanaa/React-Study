// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbEibUDMu068xs53Dynrnxhm7EEA-P3QQ",
  authDomain: "miniblog-edcbe.firebaseapp.com",
  projectId: "miniblog-edcbe",
  storageBucket: "miniblog-edcbe.appspot.com",
  messagingSenderId: "625255415777",
  appId: "1:625255415777:web:3628071dda209a00589ca0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
