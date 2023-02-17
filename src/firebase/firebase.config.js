// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE69d1ZZmeizghDe5803o0hPHSGv8QR78",
  authDomain: "doctors-portal-aa493.firebaseapp.com",
  projectId: "doctors-portal-aa493",
  storageBucket: "doctors-portal-aa493.appspot.com",
  messagingSenderId: "234265673978",
  appId: "1:234265673978:web:d0a5876300971d1f520943"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;