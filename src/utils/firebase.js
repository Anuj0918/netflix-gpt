// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoal_hfdqyoO1ksP0X2L-Z871pzUHv1Tw",
  authDomain: "netflixgpt-6789d.firebaseapp.com",
  projectId: "netflixgpt-6789d",
  storageBucket: "netflixgpt-6789d.appspot.com",
  messagingSenderId: "595978234138",
  appId: "1:595978234138:web:4b96757356ba3ca3b5a4a3",
  measurementId: "G-QKXYKPEK01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();