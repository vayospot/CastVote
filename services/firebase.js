import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import * as SecureStore from "expo-secure-store";

const firebaseConfig = {
  apiKey: "AIzaSyCl36Z8ihTSxvotsbpjYst6nkfFsGCKJHc",
  authDomain: "castvote.firebaseapp.com",
  projectId: "castvote",
  storageBucket: "castvote.firebasestorage.app",
  messagingSenderId: "132242708625",
  appId: "1:132242708625:web:60606ca7945ecf4cd30730",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(SecureStore),
});

export const db = getFirestore(app);
