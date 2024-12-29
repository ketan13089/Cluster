import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSTOpQSghQpyhaGaOZpulO_1aS_fsW7qw", 
  authDomain: "cluster-554ab.firebaseapp.com",
  projectId: "cluster-554ab",
  storageBucket: "cluster-554ab.appspot.com", 
  messagingSenderId: "951645688639",
  appId: "1:951645688639:web:161c54acba9443d72bb98a"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
