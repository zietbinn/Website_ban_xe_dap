// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

// Cấu hình Firebase của bạn
const firebaseConfig = {
  apiKey: "AIzaSyCNpmWVbzu-ypg8RwbKEPu2hTgHNTxT6A0",
  authDomain: "mywebsite-57381.firebaseapp.com",
  projectId: "mywebsite-57381",
  storageBucket: "mywebsite-57381.firebasestorage.app",
  messagingSenderId: "147272840462",
  appId: "1:147272840462:web:2c487f060d5b530c34135f"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo các provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
