// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.getTimezoneOffset());

// let myCreateDate = new Date(2023,0,4)
// let myCreateDate = new Date(2023,0,4,5,3)
let myCreateDate = new Date("01-01-2000")
// console.log(myCreateDate.toLocaleString());
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
console.log(Math.floor((((myCreateDate.getTime()/1000)/3600)/24)/365)+"yrs");
console.log(myDate);

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(`the month is ${newDate.getMonth()+1} and the year is ${newDate.getFullYear()}` );

newDate.toLocaleString('default',{
    weekday: "long",
})