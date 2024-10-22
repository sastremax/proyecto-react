import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC027Ec6WACUJ7SdPWZtLI1qf42w5aETNk",
    authDomain: "react-coder-1fb10.firebaseapp.com",
    projectId: "react-coder-1fb10",
    storageBucket: "react-coder-1fb10.appspot.com",
    messagingSenderId: "747849080554",
    appId: "1:747849080554:web:95c5c62070a7cad02d0193"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);