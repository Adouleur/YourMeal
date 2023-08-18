import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDtJKLZoKyvR_ovDKeGtZXcLJbtS0_8KgY",
    authDomain: "food-delivery-1f680.firebaseapp.com",
    projectId: "food-delivery-1f680",
    storageBucket: "food-delivery-1f680.appspot.com",
    messagingSenderId: "644102284336",
    appId: "1:644102284336:web:f8e14ca7bb81d995eab9f5",
    measurementId: "G-X3V5Y69Z4Z"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)
