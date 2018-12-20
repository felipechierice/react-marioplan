import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "CHANGE_ME",
  authDomain: "CHANGE_ME",
  databaseURL: "CHANGE_ME",
  projectId: "CHANGE_ME",
  storageBucket: "CHANGE_ME",
  messagingSenderId: "CHANGE_ME"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;