// {}  this curly braces are scope 

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "ayush"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()  // local scope  can access global scope

}

// one()

if (true) {
    const username = "ayush"
    if (username === "ayush") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// this are the 2 wway to mention funnction 

console.log(addone(5))

function addone(num){
    return num + 1
}
// this can accessed via hoisting as we can declare on top


addTwo(5)
const addTwo = function(num){
    return num + 2
}
// this cannot be accessed as it won't allow hoisting and give error