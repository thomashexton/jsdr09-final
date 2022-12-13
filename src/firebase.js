// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp-tN9R-HgLhlePr-O9uIkNrOQJ1D9TH8",
  authDomain: "jsdr09-portfolio-th.firebaseapp.com",
  projectId: "jsdr09-portfolio-th",
  storageBucket: "jsdr09-portfolio-th.appspot.com",
  messagingSenderId: "251033206594",
  appId: "1:251033206594:web:bd4027210acf2989bd92db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export const storage = getStorage(app);
export const dbRef = collection(db, "portfolio");

export const registerNewUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      debugger;
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
export const signInWithEmail = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
export const signOutUser = () =>
  signOut(auth)
    .then(() => {
      console.log("Signed out!");
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
