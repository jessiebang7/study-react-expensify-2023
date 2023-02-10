//////////////////////////////////////////////////////////////////////
////////// Object Destructuring

// const person = {
//   // name: "Andre",
//   age: 26,
//   location: {
//     city: "Philadelphia",
//     temp: 920
//   }
// }

// console.log(`${person.name} is ${person.age}`);

// const {name, age} = person;
// console.log(`${name} is ${age}`);

// const {name = 'jessie', age} = person;
// console.log(`${name} is ${age}`);

// const {name:firstName = 'jessie', age} = person;
// console.log(`${firstName} is ${age}`);

// const {city, temp} = person.location
// if(city && temp) 
//   console.log(`${temp} in ${city}`)
  
// const {city: currentCity, temp: temperture} = person.location
// if(city && temp) 
//   console.log(`${temperture} in ${currentCity}`)



// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const {name:publisherName='Self-Published'} = book.publisher;
// console.log(publisherName)



//////////////////////////////////////////////////////////////////////
//////////  Array Destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvania', '19147'];
// const [street, city, state, zip] = address;
// const [, city, state] = address;
// console.log(`You are in ${city} ${state}`);

// const address = [];
// const [, , state='NY'] = address;
// console.log(`You are in ${state}`);

const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`)