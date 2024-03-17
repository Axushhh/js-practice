const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(accumulator,currentValue){
//     console.log(`value of accumulator ${accumulator}  and currentValue ${currentValue}`);
//     return accumulator + currentValue
// }, 0)
// this 0 is the initial vallue

// const myTotal = myNums.reduce( (acc, curv) => acc + curv , 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const cartTotal = shoppingCart.reduce( (acc,item) =>acc + item.price , 0)
console.log(cartTotal);