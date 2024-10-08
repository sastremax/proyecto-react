import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC027Ec6WACUJ7SdPWZtLI1qf42w5aETNk",
    authDomain: "react-coder-1fb10.firebaseapp.com",
    projectId: "react-coder-1fb10",
    storageBucket: "react-coder-1fb10.appspot.com",
    messagingSenderId: "747849080554",
    appId: "1:747849080554:web:da5ae1cd9e649d512d0193"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
