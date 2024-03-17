const name = "ayush"
const repoCount = 10

// console.log(name + repoCount + " value");
// this was the old method and in today's time no company is going to accept this bcs its outdated.

console.log(`Hello my name is ${name} and my r repo count is ${repoCount}`);
// `${}` (string intercolision) this is the new method which is getting popular and easy to use

const newString = new String('Ayushhhh')
// new is object of JS which is used to create new variable

console.log(newString[0]);
console.log(newString.__proto__);  // this is prototype and it will return the object

console.log(newString.length);

console.log(newString.toUpperCase());

console.log(newString.charAt(3));

console.log(newString.indexOf("s"));

const newStringOne = newString.substring(0, 4)
console.log(newStringOne);

const newStringTwo = newString.slice(-7, 4)
console.log(newStringTwo);

const newStringThree = "   Ayush   "
console.log(newStringThree);
console.log(newStringThree.trim()); 
// the trim removes the extra spaces in string 

const url = "https://ayush.com/ayush%20kushwah"
console.log(url.replace('%20','-'));

console.log(url.includes('ayush')); // it will return true

console.log(url.includes('hello')); // it will return false 

const newStringFour = "ayush-kush-wah"

console.log(newStringFour.split('-'));