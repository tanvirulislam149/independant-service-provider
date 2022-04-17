// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQIbVt_mGie_Ebui7itdw1wn_1YMadE9I",
    authDomain: "assignment-10-2b635.firebaseapp.com",
    projectId: "assignment-10-2b635",
    storageBucket: "assignment-10-2b635.appspot.com",
    messagingSenderId: "149353851207",
    appId: "1:149353851207:web:df8174ab9ae6e6a7474462"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;