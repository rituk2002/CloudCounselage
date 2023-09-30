// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATtQIZqSyi_cj0jZseQaFbaKHJT6tEAPk",
    authDomain: "linkedin-clone-15e20.firebaseapp.com",
    projectId: "linkedin-clone-15e20",
    storageBucket: "linkedin-clone-15e20.appspot.com",
    messagingSenderId: "819840375971",
    appId: "1:819840375971:web:d17f8de01ebecbba987316",
    measurementId: "G-9MXJENQ03V"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
