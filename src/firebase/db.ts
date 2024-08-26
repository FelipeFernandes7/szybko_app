import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAVdQHgmoF_5j7wFKyoka9stlnGanmrLN4',
  authDomain: 'szybko-541db.firebaseapp.com',
  projectId: 'szybko-541db',
  storageBucket: 'szybko-541db.appspot.com',
  messagingSenderId: '796623028323',
  appId: '1:796623028323:web:351ce952ddf08894663856',
  measurementId: 'G-10Y7W2D8HQ',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
