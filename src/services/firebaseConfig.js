// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUcslOrcG98mqJnNI_plGUUpCpmeZZ_qg",
  authDomain: "ecommerce-agricolo-andres.firebaseapp.com",
  projectId: "ecommerce-agricolo-andres",
  storageBucket: "ecommerce-agricolo-andres.firebasestorage.app",
  messagingSenderId: "870744326815",
  appId: "1:870744326815:web:40f91155a3c5e2837558aa",
  measurementId: "G-BRVE28RND3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)