const user = {
    username : "sourav",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "rohit"
// user.welcomeMessage()
// console.log(this);
// function Coffee(){
//     let username = "sourav"
//     console.log(this.username);
// }
// Coffee()

// const chai = function(){
//     let username = "sourav"
//     console.log(this);
// }
const chai = () => {
    let username = "sourav"
    console.log(this);
}
// chai()


// const addTwo = (num1,num2) => {   // Basic arrow function // 1
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1 + num2 // Implicit return
// const addTwo = (num1,num2) => (num1 + num2) // 2 
const addTwo = (num1,num2) => ({usename : "sourav"}) // if we have to give an object to the function we have to add () else it will undefined

/*
explicit -> if we gave {} to function we have to return the function // example -> 1
implicit -> we give () to function and no need to retun the function // example -> 2
*/ 

// console.log(addTwo(3,4));

