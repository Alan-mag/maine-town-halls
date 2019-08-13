// FIREBASE METHODS
// Initialize Firebase
import firebase from 'firebase/app';
import 'firebase/database';


if (process.env.NODE_ENV !== 'production') {
  // console.log(`USING: ${process.env.PROJECT_ID}`);
}

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
};

firebase.initializeApp(config);

const firebasedb = firebase.database();

export { firebasedb };

export default firebasedb;
