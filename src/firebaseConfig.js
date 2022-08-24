import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJgVtkzW4YAe-qu8JogZmtmBohkN-FRvI",
  authDomain: "rapture-records-7682c.firebaseapp.com",
  projectId: "rapture-records-7682c",
  storageBucket: "rapture-records-7682c.appspot.com",
  messagingSenderId: "215824700736",
  appId: "1:215824700736:web:0f2df511429e05d12cd6a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db