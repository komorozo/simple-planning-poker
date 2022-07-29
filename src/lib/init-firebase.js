// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBqsLYc_1-AbFiQ2_-6I7d7kW8Z0v106ik',
    authDomain: 'poker-d38ee.firebaseapp.com',
    projectId: 'poker-d38ee',
    storageBucket: 'poker-d38ee.appspot.com',
    messagingSenderId: '889765456320',
    appId: '1:889765456320:web:1c981beb0c18bdd4c7c025',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
