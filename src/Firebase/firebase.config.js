// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2iC1tYbFYmMhr4lKa6X08WyWoUHsF488",
    authDomain: "assignment-10-client-3.firebaseapp.com",
    projectId: "assignment-10-client-3",
    storageBucket: "assignment-10-client-3.appspot.com",
    messagingSenderId: "761466470896",
    appId: "1:761466470896:web:358afdaf21994622bddd35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);