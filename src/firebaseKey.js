import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJ3KHo2TM8rvcCtFT7cWqv2ah_DKL1NtU",
  authDomain: "proyectodetitulo-3f8c7.firebaseapp.com",
  projectId: "proyectodetitulo-3f8c7",
  storageBucket: "proyectodetitulo-3f8c7.appspot.com",
  messagingSenderId: "974231405386",
  appId: "1:974231405386:web:dfd96b9a6377da2abb77b3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
