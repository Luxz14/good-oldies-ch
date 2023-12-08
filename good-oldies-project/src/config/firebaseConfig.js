import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQ9FdLIHN8Tnytj1gPvw30yx2Wa0Mp9m8",
    authDomain: "good-oldies-project.firebaseapp.com",
    projectId: "good-oldies-project",
    storageBucket: "good-oldies-project.appspot.com",
    messagingSenderId: "488359492375",
    appId: "1:488359492375:web:bdd9fba3564f9cbc8a5552"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)