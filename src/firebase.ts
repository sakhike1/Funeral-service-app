// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYnyx-D9oEH4TcYkBPcHMgsTaaTwd-qFE",
  authDomain: "gold-tears-send-off.firebaseapp.com",
  projectId: "gold-tears-send-off",
  storageBucket: "gold-tears-send-off.firebasestorage.app",
  messagingSenderId: "1003739246775",
  appId: "1:1003739246775:web:dd061a8538731b55819d32",
  measurementId: "G-RWFS29C8BE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app,db, analytics };