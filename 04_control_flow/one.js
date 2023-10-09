// if

//  <,>,<=,>=,==,!=,===,!==

if(2 !== "2"){
    // console.log("yes");
}

const score = 200

if(score > 100){
    const power = "fly"
    console.log(`User Power: ${power}`);
}

const balance = 1000

// if(balance > 500) console.log("test"),console.log("test2");  // not to do like this

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow user to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged In");
}


