function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// when we create a function defination we pass parameters eg - number1, number2
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 4) //  when we call the function we pass arguments (3,4)
// console.log(`Result will be ${result }`);


function loginUserMessage(usernmae = "Sam"){
    if(!usernmae){
        console.log("please enter a username");
        return
    }
    return `${usernmae} just logged in `
}
// console.log(loginUserMessage()); this will return sam just logged in as we by default have passed the value sam 
// console.log(loginUserMessage("Ayush")); this will return ayush just logged in bcs we have passed "ayush" in parameter

// function calculateCartPrice(num1){   // this will give single value only so we have to use rest or spread operator (...)

function calculateCartPrice(...num1){  //this ... will return a array 
    return num1
}
// console.log(calculateCartPrice(100,200,300,400,500));


// passing object to function
const user = {
    username : "ayush",
    price : 199
}
function handleObjecct(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
}
// handleObjecct(user);
handleObjecct({
    username : "Sam",
    price : 399
})

const myNewArray = [100,200,300,400]

function returnSeccondValue(getArray){
    return getArray[1]
}
// console.log(returnSeccondValue(myNewArray));
console.log(returnSeccondValue([100,200,300,400,500]));