// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbYZB_Di4-ZOrxgwxyHXF7U2EVcxhyVeY",
  authDomain: "my-react-firebase-projec-9e375.firebaseapp.com",
  projectId: "my-react-firebase-projec-9e375",
  storageBucket: "my-react-firebase-projec-9e375.appspot.com",
  messagingSenderId: "951229472329",
  appId: "1:951229472329:web:0faf3f024fc407c0236998",
  measurementId: "G-NPBNB3XBLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
 export const auth=getAuth(app);