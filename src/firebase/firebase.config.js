// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw7aDz0sMhXY-RLgYeCONbGRlhr4etdL4",
  authDomain: "react-dragon-news-auth-bce7a.firebaseapp.com",
  projectId: "react-dragon-news-auth-bce7a",
  storageBucket: "react-dragon-news-auth-bce7a.appspot.com",
  messagingSenderId: "582727759865",
  appId: "1:582727759865:web:18d597d090c5002b79ef28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = app;
export default auth;