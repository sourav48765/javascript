function setUserName(username){
    // complex DB calls
    this.username = username;
    console.log(`called`);
}

function createUser(username, email, password){
    setUserName.call(this, username)

    this.email = email;
    this.password = password;
}

const sourav = new createUser("sourav", "email.com", 188462)

console.log(sourav);