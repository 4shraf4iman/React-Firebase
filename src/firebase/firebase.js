import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
    apiKey: "AIzaSyB7xadmm5KxCf_PZrVpx253A95NO6WThcA",
    authDomain: "react-firebase-0001.firebaseapp.com",
    databaseURL: "https://react-firebase-0001.firebaseio.com",
    projectId: "react-firebase-0001",
    storageBucket: "",
    messagingSenderId: "51052240278"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const db = firebase.database();
const auth = firebase.auth();

export {
db,
  auth,
};
