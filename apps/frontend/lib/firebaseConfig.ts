import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator ,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut , getAuth};
