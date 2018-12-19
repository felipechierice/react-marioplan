import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCEueIDTlzY0uskwH1tCNJUS5Bhbv1P5BM",
  authDomain: "net-ninja-marioplan-96b5e.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-96b5e.firebaseio.com",
  projectId: "net-ninja-marioplan-96b5e",
  storageBucket: "net-ninja-marioplan-96b5e.appspot.com",
  messagingSenderId: "552260918318"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;