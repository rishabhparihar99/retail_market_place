import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0lwCdWVd1zV0BGgk2L3rw60BjTzrCHpk",
  authDomain: "crwn-clothing-db-c679c.firebaseapp.com",
  projectId: "crwn-clothing-db-c679c",
  storageBucket: "crwn-clothing-db-c679c.appspot.com",
  messagingSenderId: "831602955885",
  appId: "1:831602955885:web:cff8f5494df887c734d164",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

///provider for google authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({});
