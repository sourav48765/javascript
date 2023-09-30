console.log("2" > 1);

console.log(null > 0);
console.log(null >=0);
// the reason is that an equality check == and comparisons ><>=<= works differently
// Comparisons convert null to a numbers, treatung it as 0.
// that's why null>=0 is true and null>0 is false.

// === => Strict check

console.log("2" === 2);