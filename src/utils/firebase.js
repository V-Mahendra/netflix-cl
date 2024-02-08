// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAcT_3cadK03zjQcLKfPzyNoe6K4pSD2s",
  authDomain: "netflix-gpt-f50d4.firebaseapp.com",
  projectId: "netflix-gpt-f50d4",
  storageBucket: "netflix-gpt-f50d4.appspot.com",
  messagingSenderId: "892264538322",
  appId: "1:892264538322:web:9495d3c75d2706b2428d0b",
  measurementId: "G-JMXELB15NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);