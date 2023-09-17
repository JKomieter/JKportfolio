import { initializeApp } from "firebase/app";
import {  getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAZsNJl155NZQwkJqytIsfllQwsDnp_gS0",
    authDomain: "porfolio-17811.firebaseapp.com",
    projectId: "porfolio-17811",
    storageBucket: "porfolio-17811.appspot.com",
    messagingSenderId: "12852444359",
    appId: "1:12852444359:web:dec718449f10f00d1112e2",
    measurementId: "G-P7Q18NFT3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage(app);

export { storage } 