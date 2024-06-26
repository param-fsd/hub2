// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'jdnewshub.firebaseapp.com',
  projectId: 'jdnewshub',
  storageBucket: 'jdnewshub.appspot.com',
  messagingSenderId: '767534919866',
  appId: '1:767534919866:web:09428d8dee5c9d0df79283',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
