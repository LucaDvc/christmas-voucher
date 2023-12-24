// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBM9wSXO9ohmK4RP3ir2JLaV8-e6E7Uad0',
  authDomain: 'christmas-voucher.firebaseapp.com',
  projectId: 'christmas-voucher',
  storageBucket: 'christmas-voucher.appspot.com',
  messagingSenderId: '1068975820762',
  appId: '1:1068975820762:web:db2b901aafc920aa45bae3',
  measurementId: 'G-ZCFPKQX8MB',
  databaseURL:
    'https://christmas-voucher-default-rtdb.europe-west1.firebasedatabase.app',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
