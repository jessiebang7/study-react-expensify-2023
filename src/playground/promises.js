const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({name: 'jessie', age: 47});;
    // resolve('This is my resolved data');
    // resolve('This is my other resolved data');
    // reject('Something went wrong');
  }, 1500)
});


// promise.then(
//   (data) => {
//     console.log('1', data);
//   },
//   (error) => {
//     console.log('error', error);
//   }
// );


console.log('before');

////////// promise chainning
// promise.then((data) => {
//   console.log('1', data);
//   return 'some data'
// }).then((str) => {
//   console.log('does this run?', str);
// }).catch((error) => {
//   console.log('error 1', error);
// });


////////// promise chainning
promise.then((data) => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    }, 1500)
  });
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error 1', error);
});

console.log('after');