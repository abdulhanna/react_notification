import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBw8m-8LD8dKKKc1VwDGBzTFzXC4M6LUnQ",
    authDomain: "goal-15435.firebaseapp.com",
    projectId: "goal-15435",
    storageBucket: "goal-15435.appspot.com",
    messagingSenderId: "528693318655",
    appId: "1:528693318655:web:9ef5e23727170a88aa0dca",
    measurementId: "G-1QHC255KWM"
  };

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
