import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

/* firebase-study-react-expensify-2023-add-web
const config = {
  apiKey: "AIzaSyBjdvLt_lsr6cz_Y6WqqZFqBoxmNjMfRCo",
  authDomain: "study-react-expensify-2023.firebaseapp.com",
  databaseURL: "https://study-react-expensify-2023-default-rtdb.firebaseio.com",
  projectId: "study-react-expensify-2023",
  storageBucket: "study-react-expensify-2023.appspot.com",
  messagingSenderId: "953532973814",
  appId: "1:953532973814:web:91390157dcfab805d1a2d7",
  measurementId: "G-CKNW4YDVWK"
};
 */

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

////////////////////////////////////////////////// Setting
// database.ref().set({
//   name: 'Jessie',
//   age: 47,
//   stressLevel: 6,
//   job: {
//     title: 'Frontend Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'NY',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed', e);
// });

// database.ref().set('This is my data.'); // Set the whole database
// database.ref().set({'age': 57}); // Set the whole database
// database.ref('age').set(57);// Set 'age'
// database.ref('location/city').set('CA'); // Set 'location.city'


////////////////////////////////////////////////// Promises
// database.ref('attributes').set({
//   height: 72,
//   weight: 100
// }).then(() => {
//   console.log('Attributes are saved.');
// }).catch((e) => {
//   console.log('Setting attributes failed:', e);
// });

// console.log('I made a request to change the data.');


////////////////////////////////////////////////// Remove
// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('Removing succedded');
//   })
//   .catch((e) => {
//     console.log('Removing failed', e);
//   });

// database.ref('isSingle').set(null);


////////////////////////////////////////////////// Update
// database.ref().update({
//   name: 'Mike',
//   age: 29,
//   job: 'Front End Deveoper',
//   isSingle: null
// });

// database.ref().update({
//   job: 'Manager',
//   location: {
//     city: 'Boston'
//   }
// });

// database.ref().update({
//   job: 'Manager',
//   'location/city': 'Boston'
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Apple',
//   'location/city': 'LA'
// });


////////////////////////////////////////////////// Fetch
// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fectching data', e)
//   });

// const onValuechange = (snapshot) => {
//   console.log(snapshot.val());
// };
// database.ref()
//   .on('value', onValuechange);

// const onValuechange = database.ref()
//   .on('value', 
//     (snapshot) => {
//       console.log(snapshot.val());
//     }, 
//     (e) => {
//       console.log('Error with data fetching', e)
//     }
//   );

// setTimeout(() => {
//   database.ref('age').set(34);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValuechange)
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const {name, job} = snapshot.val();
//     console.log(`ONCE: ${name} is a ${job.title} at ${job.company}`);
//   });
  
// database.ref()
//   .on('value',
//     (snapshot) => {
//       const {name, job} = snapshot.val();
//       console.log(`ON: ${name} is a ${job.title} at ${job.company}`);
//     },
//     (e) => {
//       console.log('Fetchig data failed.', e)
//     }
//   );

////////////////////////////////////////////////// Array Part I
// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my note'
// },
// {
//   id: 'jessie12',
//   title: 'Another note',
//   body: 'This is my note'
// }];
// database.ref('notes').set(notes);

// const firebaseNotes = {
//   notes: {
//     'adfadf': {
//       title: 'First note',
//       body: 'This is my note'
//     },
//     'adfadfedf': {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// }

// database.ref('notes').push({
//   title: 'Course Topic',
//   body: 'React Native, Angular'
// });

// database.ref('notes/-NO2YBotYV1TAbmOluwW').remove();

// database.ref('expenses').push({
//   description: 'Rent',
//   amount: 109500,
//   note: 'Rent Free',
//   cratedAt: 976123498763
// });
// database.ref('expenses').push({
//   description: 'Phone bill',
//   amount: 5900,
//   note: 'Caffein Free',
//   cratedAt: 976123498763
// });
// database.ref('expenses').push({
//   description: 'Food',
//   amount: 1200,
//   note: 'Organic',
//   cratedAt: 976123498763
// });

////////////////////////////////////////////////// Array Part 2
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//   let expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log((snapshot.key, snapshot.val()));
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').push({
//   description: 'Food',
//   amount: 1200,
//   note: 'Organic',
//   cratedAt: 976123498763
// });