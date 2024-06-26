// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Sourav", "bisht@gmial.com", 8667)

// console.log(chai.changeUsername())

// ----------Behind the scene------------

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;    
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const Tea = new User("Rohit","rohit@gmail.com",598789)

console.log(Tea.changeUsername);
