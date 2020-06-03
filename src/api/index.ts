import firebase from 'firebase';
import { firebaseConfig } from 'config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();

export default database;
