// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDfCvJJ7KBGKSy8TG09Hyw3T36FJ8rITwA',
  authDomain: 'supinfo-data-engeneering.firebaseapp.com',
  databaseURL: 'https://supinfo-data-engeneering-default-rtdb.firebaseio.com',
  projectId: 'supinfo-data-engeneering',
  storageBucket: 'supinfo-data-engeneering.appspot.com',
  messagingSenderId: '104515550955',
  appId: '1:104515550955:web:01f794948670b4c9aac8ae',
  measurementId: 'G-ZFX94YQ3R6',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
