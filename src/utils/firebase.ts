import { Fuego } from './FuegoForFirebaseV8';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'movie-chat-app-9a8a8.firebaseapp.com',
  projectId: 'movie-chat-app-9a8a8',
  storageBucket: 'movie-chat-app-9a8a8.appspot.com',
  messagingSenderId: '53205383817',
  appId: '1:53205383817:web:32dd2be7706b340d556458',
};

export const fuego = new Fuego(firebaseConfig);
