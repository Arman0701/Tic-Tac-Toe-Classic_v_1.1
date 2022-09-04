import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCwS2mmSSoMuVyvKa9R04QkYhC2GqB6ndg",
    authDomain: "tic-tac-toe-classical.firebaseapp.com",
    projectId: "tic-tac-toe-classical",
    storageBucket: "tic-tac-toe-classical.appspot.com",
    messagingSenderId: "703315692567",
    appId: "1:703315692567:web:bfe06fc0338054915ae052",
	databaseURL: "https://tic-tac-toe-classical-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
