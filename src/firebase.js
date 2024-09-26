import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBw8m-8LD8dKKKc1VwDGBzTFzXC4M6LUnQ",
//     authDomain: "goal-15435.firebaseapp.com",
//     projectId: "goal-15435",
//     storageBucket: "goal-15435.appspot.com",
//     messagingSenderId: "528693318655",
//     appId: "1:528693318655:web:9ef5e23727170a88aa0dca",
//     measurementId: "G-1QHC255KWM"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyDNuDNk-tXDPoRH9OicqX6_a_19_0RLK10",
  authDomain: "fir-833bd.firebaseapp.com",
  projectId: "fir-833bd",
  storageBucket: "fir-833bd.appspot.com",
  messagingSenderId: "650426026343",
  appId: "1:650426026343:web:1b7f4d389b0823d56b07c2",
  measurementId: "G-CN8F1PVDN6"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
