import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAn5V9eWW7Hkaaf7P3Py5FITBQe7k76SPQ",
  authDomain: "devroom-85876.firebaseapp.com",
  projectId: "devroom-85876",
  storageBucket: "devroom-85876.firebasestorage.app",
  messagingSenderId: "423410199892",
  appId: "1:423410199892:web:41a0cc60ca2be4c8702cc1",
  measurementId: "G-69YG8QNWVR"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);