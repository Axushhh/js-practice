 // In JavaScript the datatypes are generally of 2 types 
 // this differentiation is done on the basis of how the data is stored in the memory

 // 1st type

 // Primitive
 // in which 7 types comes : String, Number, Boolean, null, undefined, Symbol, BigInt

 const score = 100
 const scoreValue = 100.3
 
 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;
 
 const id = Symbol('123')
 const anotherId = Symbol('123')
 
 console.log(id === anotherId);

 // const bigNumber = 3456543576654356754n
 
  
// 2nd type

// reference (Non-Primitive)
// Array, Objects, Functions

const Array = ["ayush", "kushwah"]; 

let myObj = {
    name : "ayush",
    age : 20,
}

// function(){}   thats how we declare function

const myFunction = function(){
    console.log("Namaste world");
}



// =============================================================

// Stack(Primitive), Heap(Non_Primitive)

// in the stack the copy is being created so no changes in the original content 
// whereas in heap or non primitive memory the original value is being manipulated
