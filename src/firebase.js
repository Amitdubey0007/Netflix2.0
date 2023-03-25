// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBk4YDI4aGI_dWzCu9TcP5Ga6jKq-AhPfM",
  authDomain: "netflix2-2c706.firebaseapp.com",
  projectId: "netflix2-2c706",
  storageBucket: "netflix2-2c706.appspot.com",
  messagingSenderId: "897569769337",
  appId: "1:897569769337:web:b209dd424b5d32c91551a8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { auth };

export default db;
