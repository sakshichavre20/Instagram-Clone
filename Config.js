// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*
const firebaseConfig = {
  apiKey: "AIzaSyB2nwX2OQeHNNys8C_cjyEEcl5qW3P6mvQ",
  authDomain: "instagram-a6c4f.firebaseapp.com",
  projectId: "instagram-a6c4f",
  storageBucket: "instagram-a6c4f.appspot.com",
  messagingSenderId: "441445109656",
  appId: "1:441445109656:web:01ceb8812928fd278465ed",
  measurementId: "G-H3KY97W81K"
};
*/
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB2nwX2OQeHNNys8C_cjyEEcl5qW3P6mvQ",
  authDomain: "instagram-a6c4f.firebaseapp.com",
  projectId: "instagram-a6c4f",
  storageBucket: "instagram-a6c4f.appspot.com",
  messagingSenderId: "441445109656",
  appId: "1:441445109656:web:01ceb8812928fd278465ed",
  measurementId: "G-H3KY97W81K",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
