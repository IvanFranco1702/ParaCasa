import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxk8xDByREaXmAqqlN2kOGFw1kxuMGepU",
  authDomain: "curso--react.firebaseapp.com",
  projectId: "curso--react",
  storageBucket: "curso--react.appspot.com",
  messagingSenderId: "1062110813627",
  appId: "1:1062110813627:web:ed022549167ae38fe7b89e"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );