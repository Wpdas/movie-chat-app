// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'movie-chat-app-9a8a8.firebaseapp.com',
  projectId: 'movie-chat-app-9a8a8',
  storageBucket: 'movie-chat-app-9a8a8.appspot.com',
  messagingSenderId: '53205383817',
  appId: '1:53205383817:web:32dd2be7706b340d556458',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore
export const db = getFirestore(app);

// Helpers
export const getCollectionDocs = async (collectionName: string) =>
  getDocs(collection(db, collectionName));
