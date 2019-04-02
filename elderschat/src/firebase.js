import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBHZBVX-Kko9A6pC9ERDzwfmS1SmavolsQ",
  authDomain: "elderschat-4aaf3.firebaseapp.com",
  databaseURL: "https://elderschat-4aaf3.firebaseio.com",
  projectId: "elderschat-4aaf3",
  storageBucket: "elderschat-4aaf3.appspot.com",
  messagingSenderId: "236247531013"
};
firebase.initializeApp(config);

export default firebase;
