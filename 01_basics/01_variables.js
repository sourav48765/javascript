const accountId = 144553
let accountEmail = "bisht4876@gmail.com"
var accountPassword = "12345"
accountCity = "Gurgaon"
let accountState;

// accountId = 2 //not allowed

accountEmail = "dsff.com"
accountPassword = "56546"
accountCity = "Delhi"

// console.log(accountId);
// console.log(accountEmail);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) 

