// Copy your Firebase Web App config here. Never put Admin SDK/service-account keys here.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0cMbwNjt1oOUR7Agt7ghKs_JhXHW_Vdg",
  authDomain: "cricket-auction-arena-829db.firebaseapp.com",
  databaseURL: "https://cricket-auction-arena-829db-default-rtdb.firebaseio.com",
  projectId: "cricket-auction-arena-829db",
  storageBucket: "cricket-auction-arena-829db.firebasestorage.app",
  messagingSenderId: "442674370947",
  appId: "1:442674370947:web:54843e2dcabe1d28b8beb6",
  measurementId: "G-4JP2JSFL16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
