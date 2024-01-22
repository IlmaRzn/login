// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkz6wnyNBjwrQFGaZhJG3pF6sI4Ez_ND8",
  authDomain: "sample-daea4.firebaseapp.com",
  projectId: "sample-daea4",
  storageBucket: "sample-daea4.appspot.com",
  messagingSenderId: "71698642987",
  appId: "1:71698642987:web:c726bf34fd2a84836e126e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export { auth }
 