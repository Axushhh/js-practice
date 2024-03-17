// singleton 

// it is one of its type (single)
// interview pov answer = when we declare like literals then singleton wont make but by constructor can 

// object.crete (construtor method of creating object)

// object literals

const mySym = Symbol("key1")

const JSuser = {
    name:"ayush",
    "full name": "Ayush Kushwah",
    [mySym]: "mykey1",   // [mySym] the symbol should be mentioned inside bigbracket then only it will be created as symbol 
    age: 18,
    location: "Indore",
    email: "ayush@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]);
// console.log(JSuser[mySym]);

// . (dot method) and [""] (bold or big bracket method) this are the 2 methods to access object

JSuser.email = "ayush@yahoo.com"
// console.log(JSuser.email);
// Object.freeze(JSuser)
JSuser.email = "ayush@duckduckgo.com"
// console.log(JSuser.email);

JSuser.greeting = function(){
    console.log("hello user");
}
JSuser.greetingTwo = function(){
    console.log(`hello user ${this["full name"]}`);
}
console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());
