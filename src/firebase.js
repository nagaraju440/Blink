// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2srbDLQkb9SR7v-XFWMwu0d8LvI25YoM",
  authDomain: "eyes-game.firebaseapp.com",
  projectId: "eyes-game",
  storageBucket: "eyes-game.appspot.com",
  messagingSenderId: "748285602110",
  appId: "1:748285602110:web:20489efe891ad462db246f",
  measurementId: "G-WV5S6JKP4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);