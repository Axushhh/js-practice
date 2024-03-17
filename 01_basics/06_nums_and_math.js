const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(2)); 

// toFixed is used to give the precise value , in toFixed we asign a value number

const otherNumber = 123.12345
// console.log(otherNumber.toPrecision(4)); 

// this will return 123.1

const hundreds = 100000000
// console.log(hundreds.toLocaleString());

//this is used to make the number countable by putting ther comamas in between number 

// ++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// console.log(Math);
//  // this will return an object as Math is built-in library just like Number
// console.log(Math.abs(-4)); // this will give absolute value
// console.log(Math.round(4.3)); // round off 
// console.log(Math.ceil(4.2)); // this will give next number if it have after point value (.1), it will roundoff to greater value
// console.log(Math.floor(4.9)); //this will give lower value, it will roundoff to lower value
// console.log(Math.min(4,2,5,7,9,8)); // will give min value
// console.log(Math.max(4,2,5,7,9,8)); // this will give max value 

console.log(Math.random()); // this will always give value between 0 to 1

console.log((Math.random()*10) + 1); // this can be used in dice game like this


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) /*this will give the range*/ + min );
