import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0cvdOQDyMVgE84kYLrdA3k1N9OBhyQew",
  authDomain: "pupil-devops.firebaseapp.com",
  projectId: "pupil-devops",
  storageBucket: "pupil-devops.appspot.com",
  messagingSenderId: "494422057403",
  appId: "1:494422057403:web:a139c1b2ac91144393249e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();
