// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export default defineNuxtPlugin(nuxtApp=>{

const firebaseConfig = {
  apiKey: "AIzaSyDIMolEHKz8pwIegicDCEvoTyP0SagShBU",
  authDomain: "blog-app-2a601.firebaseapp.com",
  projectId: "blog-app-2a601",
  storageBucket: "blog-app-2a601.appspot.com",
  messagingSenderId: "132977405488",
  appId: "1:132977405488:web:0a0b158201179e88ef87f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

nuxtApp.vueApp.provide('db', db)
nuxtApp.provide('db', db)





});