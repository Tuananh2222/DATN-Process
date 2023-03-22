// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnkw999MHPiN9Xvs01MgI_61gU7ZvEbuI",
    authDomain: "datn-73161.firebaseapp.com",
    projectId: "datn-73161",
    storageBucket: "datn-73161.appspot.com",
    messagingSenderId: "173965154936",
    appId: "1:173965154936:web:0286a5cfed8583b112eb8d",
    measurementId: "G-72RJBG1T4T"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')