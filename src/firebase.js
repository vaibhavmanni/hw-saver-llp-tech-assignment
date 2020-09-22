import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAfh0r4rk3JHOkSTs-0QFC3R8_YEW22oYw",
  authDomain: "hw-project-fe28b.firebaseapp.com",
  databaseURL: "https://hw-project-fe28b.firebaseio.com",
  projectId: "hw-project-fe28b",
  storageBucket: "hw-project-fe28b.appspot.com",
  messagingSenderId: "395761517920",
  appId: "1:395761517920:web:ba051ec8a4ff2e4a360a05",
  measurementId: "G-LELFE0VM0E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
