// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
