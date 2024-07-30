// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3jh8-c4iKM4AT9gTviIpA1zz-yiZHujQ",
    authDomain: "notesapp-b7e13.firebaseapp.com",
    projectId: "notesapp-b7e13",
    storageBucket: "notesapp-b7e13.appspot.com",
    messagingSenderId: "724982779765",
    appId: "1:724982779765:web:97dba68faf2cc79aba0d3c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app