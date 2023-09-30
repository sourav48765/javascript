// primitive

// 7 types : String, Numbers, Boolean, null, undefined, Symbol, BigInt

// Reference (Non primitives)

// Array, Ojects, Functions

const id = Symbol('123')
const  anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 344684346418984488884545468n
console.log(bigNumber);


const heroes = ["Shaktiman","naagraj","doga"]
let obj = {
    name : "Sourav",
    age : 21,
}

const myFunction = function(){
    console.log("hello World");
}

console.log(typeof bigNumber);
console.log(typeof heroes);
console.log(typeof obj);
console.log(typeof myFunction);

console.log(heroes.slice(0,3));
