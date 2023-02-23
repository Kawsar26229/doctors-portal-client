// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwgAqxKYhKHSQoiKz2iTNPMI20shnESyc",
  authDomain: "doctors-portal-client-35047.firebaseapp.com",
  projectId: "doctors-portal-client-35047",
  storageBucket: "doctors-portal-client-35047.appspot.com",
  messagingSenderId: "207466904619",
  appId: "1:207466904619:web:096e340d7861a0a21a3e6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;