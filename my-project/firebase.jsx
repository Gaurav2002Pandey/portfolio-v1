// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXL8utpvYLqVcfmjoMArgaVvcS2P20baE",
  authDomain: "portfolio-bffd2.firebaseapp.com",
  projectId: "portfolio-bffd2",
  storageBucket: "portfolio-bffd2.appspot.com",
  messagingSenderId: "1041963776893",
  appId: "1:1041963776893:web:b7d38d6f217e079e65ea14",
  measurementId: "G-9LY95BC016"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);