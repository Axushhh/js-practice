// array

const myArr = [0,1,2,3,4,5,8]
const myArr2 = ["ayush", "kushwah", "oh-yeah"]
const myArr3 = new Array(1,2,3,4,5)
// console.log(myArr[1]); 


// Array Methods (operations)
// push and pop works at end of array

// myArr.push() 
// myArr.push(10)
// myArr.pop()
// unshift add value at start and shift pop from start

// myArr.unshift(7)
// myArr.shift()

// console.log(myArr.includes(5)); 
// this will check weather the number is present in array or not and give boolean value (true or false)

// console.log(myArr.indexOf(8)); 
//this will give index value of number

// const newArr = myArr.join()
// join will bind the array and will convert in string

// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);

// the slice don't manipulate the original array
// the slice will work accurate from start and -1 from the mentioned end point
const myn1 = myArr.slice(1, 3)
console.log("B ", myArr);
console.log(myn1);

// the splice will manipulate the original array and the array will become short
// the splice works on accurate range from where it start to where it ends
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);