const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// concat is used to merge 2 array into single array which will return 3rd array
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// (...) spread operartor, this will seperate every element of an array 
// the concat and spread is used to join the array but now mostly spread is used
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// this will convert this nested array into the single array
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //isArray is used to check given content is array or not
console.log(Array.from("Hitesh")) // from is used to convert anything into array
console.log(Array.from({name: "hitesh"})) // interesting, here we have to mention the use of key in array unless it will return an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //this will returns a new array from a set of elements