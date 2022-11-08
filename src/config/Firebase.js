// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6_vVHqdLjCGW4olb_P0CfFI9h1DTyk8c",
  authDomain: "assignment-11-67b40.firebaseapp.com",
  projectId: "assignment-11-67b40",
  storageBucket: "assignment-11-67b40.appspot.com",
  messagingSenderId: "462223882488",
  appId: "1:462223882488:web:b5a190790f0f429190a30d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);