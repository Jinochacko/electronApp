// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaDXnaWMZEsa8zJYOaesxurYhu0cRBjyA",
  authDomain: "authdemo-37e5f.firebaseapp.com",
  projectId: "authdemo-37e5f",
  storageBucket: "authdemo-37e5f.appspot.com",
  messagingSenderId: "170812438590",
  appId: "1:170812438590:web:0de9f387bd892faca7f96f",
  measurementId: "G-QBV39K0BSQ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const Providers = {
    facebook: new firebase.auth.FacebookAuthProvider(),
  google: new firebase.auth.GoogleAuthProvider()
}
// const analytics = getAnalytics(app);
export default app;