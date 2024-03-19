const firstPromise = new Promise(function(resolve,reject){
     //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('async task is complete');
        resolve() 
        // to access the resolve we have to mention it like this so (.then) will now be accessible 
    },1000)
})
firstPromise.then(function(){
    console.log('first promise is consumed ');
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');  
        resolve()      
    }, 1000);
}).then(function(){
    console.log('Async 2 resolved');
})



const thirdPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        // we can pass object string array etc in resolve
        resolve({username : "axushhh",
         email : "ayush@gmail.com"})
    }, 1000);
})

thirdPromise.then(function(user){   
    // the user parameter will take the object from resolve
    console.log(user);
})

const fourthPromise = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username : "ayush", email : "ayush@gmail.com" , password : "1234"})
        }
        else{
            reject('ERROR : something went wrong')
        }
    }, 2000);
})

//chainig example

fourthPromise.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(function(){
    console.log('The promise is either resolved or rejected');
})

const fifthPromise = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username : "JavaScript", email : "JS@gmail.com" , password : "1234"})
        }
        else{
            reject('ERROR : JS went wrong')
        }
    }, 2000);
})
// Async and Await
async function consumeFifthPromise(){
    try {
        const response = await fifthPromise
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumeFifthPromise()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/Axushhh')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
