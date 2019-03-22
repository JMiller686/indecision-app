// import { square, add } from './utils.js';

// console.log(square(4));
// console.log(add(100,23));


// person.js
// named export isAdult(age) return true if adult false otherwise
// named export canDrink(age) return true if over 21 otherwise false

//import isAdult, canDrink
// use both, printing results to the console

import { isAdult, canDrink } from './person.js';

console.log('isAdult', isAdult(19));
console.log('canDrink', canDrink(19));