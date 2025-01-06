// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm3w_aZeSo17j_9zjk8JJ-aBHgmDU6Xzc",
  authDomain: "my-portfolio-d01aa.firebaseapp.com",
  projectId: "my-portfolio-d01aa",
  storageBucket: "my-portfolio-d01aa.firebasestorage.app",
  messagingSenderId: "975567725084",
  appId: "1:975567725084:web:a9a30f822b4d84e8e135d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
