import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAm_h7icnPKLlK5sn6O09Ka7sif4lYbC4U",
  authDomain: "netflix-nov.firebaseapp.com",
  projectId: "netflix-nov",
  storageBucket: "netflix-nov.appspot.com",
  messagingSenderId: "440384959036",
  appId: "1:440384959036:web:1b9330d18f0690f82cc939",
  measurementId: "G-LNTVBN790J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);