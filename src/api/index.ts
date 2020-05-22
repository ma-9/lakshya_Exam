import { data } from 'temp/data';
import firebase from 'firebase';
import { firebaseConfig } from 'config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();

export const fetchSampleData = () => {
  // const FetchedData = ;
  return data;
};

export const sendDataToFirebase = async (data: any, index: any) => {
  console.log('Firebase sending', data);
  await database.ref('/questions/' + index).set(data);
};

// export const fet = () => {
//   database.ref('/questions').on('value', (snapshot) => {
//     console.log(snapshot.val());
//   });
// };

export default database;
