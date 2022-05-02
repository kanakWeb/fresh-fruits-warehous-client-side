// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgjF-Z8mqzO9eqJERT66r8PmWmx18BU5Y",
  authDomain: "fresh-fruits-f5235.firebaseapp.com",
  projectId: "fresh-fruits-f5235",
  storageBucket: "fresh-fruits-f5235.appspot.com",
  messagingSenderId: "306772113269",
  appId: "1:306772113269:web:31e4238fccaf2c3844c53c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;