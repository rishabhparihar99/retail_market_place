// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdmDrPcbkISiHSPPLIUaHFDiAJVEXHRgA",
  authDomain: "retail-market-place.firebaseapp.com",
  projectId: "retail-market-place",
  storageBucket: "retail-market-place.appspot.com",
  messagingSenderId: "162020790131",
  appId: "1:162020790131:web:134fa398d82bcbd637ff06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

///provider for google authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef); // Object taht represnt some document reference in database
};
