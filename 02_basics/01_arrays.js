// arrays

const myArr = [0,1,2,3,4,5]
const myArr2 = new Array(1,2,3,4)

// console.log(myArr2[0]);

// console.log(myArr[0]);

// Array methods

// myArr.push(6)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()


// console.log(myArr.indexOf(9));


// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// console.log(typeof(myArr));
// console.log(typeof(newArr));

// slice , splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1,3);

// console.log(myn1);
// console.log("B " ,myArr);

// const myn2 = myArr.splice(1,3);
// console.log(myn2);
// console.log("C ", myArr);

// const marvelHeroes = ["thor","Ironman","spiderman"]
// const dcHeroes = ["superman","flash","batman"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);
// console.log(marvelHeroes[3]);

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);

// const all_new_heroes = [...marvelHeroes,...dcHeroes]
// console.log(all_new_heroes);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArr = anotherArr.flat(Infinity)
console.log(realAnotherArr);


console.log(Array.isArray("Sourav"))
console.log(Array.from("Sourav"))
console.log(Array.from({name : "Sourav"})) // interesting as we have to give it that from what we want to make an array is it key or value.

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1,score2,score3)); 