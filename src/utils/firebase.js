// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtfQft_GGpy-X3xHInY0ute6lJ002DyTg",
  authDomain: "netflix-gpt-8d689.firebaseapp.com",
  projectId: "netflix-gpt-8d689",
  storageBucket: "netflix-gpt-8d689.appspot.com",
  messagingSenderId: "994445993388",
  appId: "1:994445993388:web:8b3ca13535e34f743b0609",
  measurementId: "G-1EZKPFZ0M7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
