// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "instagram-next-db7fd.firebaseapp.com",
  projectId: "instagram-next-db7fd",
  storageBucket: "instagram-next-db7fd.appspot.com",
  messagingSenderId: "233318939901",
  appId: "1:233318939901:web:b498a2bfa2e61532b19294",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
