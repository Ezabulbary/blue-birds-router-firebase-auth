import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBynLztQVWG1EZGEJBURYkxBhllRYwU-ow",
    authDomain: "bluebirds-router-firebase-auth.firebaseapp.com",
    projectId: "bluebirds-router-firebase-auth",
    storageBucket: "bluebirds-router-firebase-auth.appspot.com",
    messagingSenderId: "1028151204343",
    appId: "1:1028151204343:web:2265d1d942565fee72f6f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); 

export default auth;