// const user = {
//     username: "sourav",
//     age: "22",
//     language: "js",

//     getUserDetails: function(){
//         // console.log("got user details from database");
//         console.log(`username: ${this.username}`);
//         console.log(this);
//     }
// }



// console.log(user.getUserDetails());
// console.log(this);

function user(username, loggedKey, isLoggedIn){
    this.username = username;
    this.loggedKey = loggedKey;
    this.isLoggedIn = isLoggedIn;

    return this  
}

const userOne = new user("sourav", 25, true);
const userTwo = new user("rohit", 25, false);

console.log(userOne.constructor);
// console.log(userTwo);

