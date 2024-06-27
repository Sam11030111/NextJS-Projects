// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-next-3f3c4.firebaseapp.com",
  projectId: "blog-next-3f3c4",
  storageBucket: "blog-next-3f3c4.appspot.com",
  messagingSenderId: "707256334583",
  appId: "1:707256334583:web:7d471f5b31ef263da77bf2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
