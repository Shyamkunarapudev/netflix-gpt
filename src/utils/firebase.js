// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwKinvAmVuG8Y0O_TaPC-4VgogzEDZTKs",
  authDomain: "netflixgtp-d80a6.firebaseapp.com",
  projectId: "netflixgtp-d80a6",
  storageBucket: "netflixgtp-d80a6.firebasestorage.app",
  messagingSenderId: "786625324798",
  appId: "1:786625324798:web:c018c1e9a74f39fe3a67af",
  measurementId: "G-K82NJLJMFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);