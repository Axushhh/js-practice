// const tinderUser = new object() this is single term object
const tinderUser = {} // this is not single term object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}  //(...) we will mostly use this spread operator to concatination
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  keys will return keys in array
// console.log(Object.values(tinderUser)); values will return keys value in array 
// console.log(Object.entries(tinderUser)); this will make each key-value into a array (array inside array)

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); hasOwnProperty is used to check wether it contain value or not 

// De-structuring 
// we can de-structure object and array

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//object de-structuring {} using the curly braces
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);