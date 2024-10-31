// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQJJRWv3GRZs9Q0rZf7qJQEKzbBvnqt7I",
  authDomain: "portafolio-47736.firebaseapp.com",
  projectId: "portafolio-47736",
  storageBucket: "portafolio-47736.appspot.com",
  messagingSenderId: "690052673995",
  appId: "1:690052673995:web:99d3ca1ec6853a8860064e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp ( firebaseConfig );
export const FirebaseAuth = getAuth ( FirebaseApp );
export const FirebaseDB = getFirestore ( FirebaseApp );