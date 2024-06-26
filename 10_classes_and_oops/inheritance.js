class User{
    constructor(username){
        this.username = username;
        console.log(`Here lies dead bodies of ${username}`);
    }

    logMe(){
        console.log(`${this.username} is logged`);
    }
}

class teacher extends User{
    constructor(username, email, password){
        super(username);
        this.password = password;
        this.email = email;
    }

    addCourse(){
        console.log(`A new Course added by this username ${this.username}`);
    }
}

const chai = new User("chai")
const tea = new teacher("tea", "tea@gmai.com", 654665)

tea.addCourse()
console.log(tea instanceof User);