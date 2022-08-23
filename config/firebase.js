// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuv6skx30FfKWoqPK0_H0MujBbK82LjxA",
    authDomain: "gdsc---fptu.firebaseapp.com",
    projectId: "gdsc---fptu",
    storageBucket: "gdsc---fptu.appspot.com",
    messagingSenderId: "560344632239",
    appId: "1:560344632239:web:f1315ad2e4ffe405813d5a",
    measurementId: "G-2YRJQS337P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);