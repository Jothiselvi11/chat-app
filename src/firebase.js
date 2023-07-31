import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getFirebase } from "firebase/firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDuL60kBxwur6U2E0Ia_PoRfZbn5a_rrAY",
	authDomain: "chat-30aa0.firebaseapp.com",
	projectId: "chat-30aa0",
	storageBucket: "chat-30aa0.appspot.com",
	messagingSenderId: "481941700553",
	appId: "1:481941700553:web:1ada7d272d23ff4581b218"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
