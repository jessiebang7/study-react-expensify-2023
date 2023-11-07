import * as firebase from 'firebase';

(function () {
  // firebase-study-react-expensify-2023-add-web
  const config = {
    apiKey: "AIzaSyBfljsIL-5tQFXiR0JeJ3l4J6y_zpfqRDA",
    authDomain: "study-react-expensify-2023-t.firebaseapp.com",
    databaseURL: "https://study-react-expensify-2023-t-default-rtdb.firebaseio.com",
    projectId: "study-react-expensify-2023-t",
    storageBucket: "study-react-expensify-2023-t.appspot.com",
    messagingSenderId: "491904600675",
    appId: "1:491904600675:web:5c7186e7fa18582e908656",
    measurementId: "G-P3Z27VRK9R"
  };

  // firebase.initializeApp(config);
  // const database = firebase.database();

  const practiceApp = firebase.initializeApp(config, 'practice');
  const database = practiceApp.database();

  ////////////////////////////////////////////////// Setting
  // database.ref('practice').set({
  //   name: 'Jessie',
  //   age: 47,
  //   isSingle: 47,
  //   location: {
  //     city: 'NY',
  //     country: 'United States'
  //   }
  // })
  // .then(() => {
  //   console.log('Data is saved');
  // })
  // .catch((e) => {
  //   console.log('This faile:', e);
  // });

// database.ref('practice').set('This is my data.'); // Set the whole database
// database.ref('practice').set({'age': 57}); // Set the whole database
// database.ref('practiceage/age').set(57);// Set 'age'
// database.ref('practice/location/city').set('CA'); // Set 'location.city'


////////////////////////////////////////////////// Promises
// database.ref('practice/attributes').set({
//   height: 72,
//   weight: 100
// }).then(() => {
//   console.log('Attributes are saved.');
// }).catch((e) => {
//   console.log('Setting attributes failed:', e);
// });

// console.log('I made a request to change the data.');


////////////////////////////////////////////////// Remove
// database.ref('practice/isSingle')
// .remove()
// .then(() => {
//   console.log('Removing succedded');
// })
// .catch((e) => {
//   console.log('Removing failed', e);
// });

// database.ref('practice/isSingle').set(null);


////////////////////////////////////////////////// Update
///// Ex 1
// database.ref('practice').set({
//   name: 'Jessie',
//   age: 47,
//   isSingle: 47,
//   location: {
//     city: 'NY',
//     country: 'United States'
//   }
// });

// database.ref('practice').update({
//   name: 'Mike',
//   age: 29,
//   job: 'Front End Deveoper',
//   isSingle: null
// });

///// Ex 2
// database.ref('practice').set({
//   name: 'Jessie',
//   age: 47,
//   job: 'Software developer',
//   location: {
//     city: 'NY',
//     country: 'United States'
//   }
// });

// database.ref('practice').update({
//   job: 'Manager',
//   location: {
//     city: 'Boston'
//   }
// });

// database.ref('practice').update({
//   job: 'Manager',
//   'location/city': 'Boston'
// });


///// Challenge
// database.ref('practice').set({
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
// });

// database.ref('practice').update({
//   stressLevel: 9,
//   'job/company': 'Apple',
//   'location/city': 'LA'
// });


////////////////////////////////////////////////// Fetch

// database.ref('practice').set({
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
// });

// ##### fetch data a single time
// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fectching data', e)
//   });

// database.ref('practice/location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fectching data', e)
//   });


// ##### fetch data by subscribing - To have the server notify us of changes
// 1)
// database.ref()
// .on('value', (snapshot)=> {
//   console.log(snapshot.val());
// });

// setTimeout(() => {
//   database.ref('practice/age').set(50);
// }, 3000);

// setTimeout(() => {
//   database.ref().off();
// }, 6000);

// setTimeout(() => {
//   database.ref('practice/age').set(70);
// }, 9000);

// 2)
// const onValuechange = (snapshot) => {
//   console.log(snapshot.val());
// };

// database.ref()
// .on('value', onValuechange);

// setTimeout(() => {
//   database.ref('practice/age').set(34);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValuechange)
// }, 7000);

// setTimeout(() => {
//   database.ref('practice/age').set(30);
// }, 10500);

// 3)
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
//   database.ref('practice/age').set(34);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValuechange)
// }, 7000);

// setTimeout(() => {
//   database.ref('practice/age').set(30);
// }, 10500);

///// Challenge
// database.ref('practice')
//   .once('value')
//   .then((snapshot) => {
//     const {name, job} = snapshot.val();
//     console.log(`ONCE: ${name} is a ${job.title} at ${job.company}`);
//   });
  
// database.ref('practice')
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

// database.ref('practice/notes').set(notes);

// const firebaseNotes = {
//   notes: {
//     'adfadf': {  // <-- 'adfadf' is an ID
//       title: 'First note',
//       body: 'This is my note'
//     },
//     'adfadfedf': {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// }

// database.ref('practice/notes').push({
//   title: 'Course Topic',
//   body: 'React Native, Angular'
// });

// database.ref('practice/notes/-NVuk5kV3SC2qTPUe8-U').update({
//   body: 'Buy Food'
// })

// database.ref('practice/notes/-NVuk5kV3SC2qTPUe8-U').remove();

// ##### Challenge
// database.ref('practice/expenses').push({
//   description: 'Rent',
//   amount: 109500,
//   note: 'Rent Free',
//   cratedAt: 976123498763
// });
// database.ref('practice/expenses').push({
//   description: 'Phone bill',
//   amount: 5900,
//   note: 'Caffein Free',
//   cratedAt: 976123498763
// });
// database.ref('practice/expenses').push({
//   description: 'Food',
//   amount: 1200,
//   note: 'Organic',
//   cratedAt: 976123498763
// });

////////////////////////////////////////////////// Array Part 2
database.ref('practice/expenses')
  .once('value')
  .then((snapshot) => {
    // console.log(snapshot.val());
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  });

  // ##### Challenge
// const onValueChange = database.ref('practice/expenses')
// .on('value', 
//   (snapshot) => {
//     let expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   },
//   (error) => {
//     console.log('Error:', error);
//   }
// );

  // ##### Other Events
database.ref('practice/expenses').on('child_removed', (snapshot) => {
  console.log('child_removed:', snapshot.key, snapshot.val());
});

database.ref('practice/expenses').on('child_changed', (snapshot) => {
  console.log('child_changed:', snapshot.key, snapshot.val());
});

database.ref('practice/expenses').on('child_added', (snapshot) => {
  console.log('child_added:', snapshot.key, snapshot.val());
});

setTimeout(() => {
database.ref('practice/expenses').push({
  description: 'Food',
  amount: 1200,
  note: 'Organic',
  cratedAt: 976123498763
});
}, 3000);


})();
