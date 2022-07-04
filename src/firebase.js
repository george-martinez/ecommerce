import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDObZOIIsqtFgm_YID3VPCAbx7Z4MJ0QcE",
  authDomain: "techshop-c1379.firebaseapp.com",
  projectId: "techshop-c1379",
  storageBucket: "techshop-c1379.appspot.com",
  messagingSenderId: "739933495175",
  appId: "1:739933495175:web:c9c1fbaa46c714927ebd22",
  measurementId: "G-NCGKBJ1FE3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp);

export { auth, db }