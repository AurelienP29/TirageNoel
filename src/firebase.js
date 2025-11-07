// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8B3cCIG1-5MnShEbw89WooX0kj7oe6FA",
    authDomain: "tiragenoel-c25b8.firebaseapp.com",
    projectId: "tiragenoel-c25b8",
    storageBucket: "tiragenoel-c25b8.firebasestorage.app",
    messagingSenderId: "225331032723",
    appId: "1:225331032723:web:c6e4eb4fade48cf26a1366"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };