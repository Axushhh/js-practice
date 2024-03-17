const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumber.map( (num) => num + 10 )
// console.log(newNums);

// const newNums = myNumber.forEach( (num) => {
//     console.log(num + 10);
//     return num
// })

const newNums = myNumber
                 .map((num) => num * 10)
                 .map((num) => num + 1)
                 .filter( (num) => num >= 30)
console.log(newNums);