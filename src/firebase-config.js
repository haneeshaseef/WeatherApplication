// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9oxYMvaBEPXu4o1RCEBC8KfIQD3ttmT0",
  authDomain: "weatherapp-7848e.firebaseapp.com",
  projectId: "weatherapp-7848e",
  storageBucket: "weatherapp-7848e.appspot.com",
  messagingSenderId: "463143592153",
  appId: "1:463143592153:web:f5e82c9fe29bfded0d1ec8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default app