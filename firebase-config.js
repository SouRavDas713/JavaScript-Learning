// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDti7EVyhxVdh_o8DkWu7AaQSL-fjdpOZE",
  authDomain: "tools-lab-e7b9a.firebaseapp.com",
  projectId: "tools-lab-e7b9a",
  storageBucket: "tools-lab-e7b9a.firebasestorage.app",
  messagingSenderId: "630666561638",
  appId: "1:630666561638:web:3f1d8c952dd5fe35fec5a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);