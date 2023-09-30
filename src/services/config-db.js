import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBSw8dwSvQitlhJcSTMsP71i7BqOQ6aPR4",
  authDomain: "co-op-1f7b0.firebaseapp.com",
  projectId: "co-op-1f7b0",
  storageBucket: "co-op-1f7b0.appspot.com",
  messagingSenderId: "719519433257",
  appId: "1:719519433257:web:6962e7314580b4a9f01238",
  measurementId: "G-85EWPNS54R"
};
initializeApp(firebaseConfig);

const db = getFirestore()

export {db}

