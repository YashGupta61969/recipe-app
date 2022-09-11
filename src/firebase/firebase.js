import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";

// private configs. Must be hidden. Visible for devepment mode
const firebaseConfig = {
  apiKey: "AIzaSyBRlg75smfZ_HgWddC4Rj9VFsY5QAugDhc",
  authDomain: "recipe-app-4f2ba.firebaseapp.com",
  projectId: "recipe-app-4f2ba",
  storageBucket: "recipe-app-4f2ba.appspot.com",
  messagingSenderId: "357160867129",
  appId: "1:357160867129:web:67c81ff97d7ab9bac684e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize firestore
export const db = getFirestore(app);

// initialize storage
export const storage = getStorage(app)

// initialize Auth
export const auth = getAuth()