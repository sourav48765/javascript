class User{
    constructor(username){
        this.username = username;
        console.log(`Here lies dead bodies of ${username}`);
    }

    logMe(){
        console.log(`${this.username} is logged`);
    }

    static createId(){
        return `123`
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

// console.log(chai.createId()); //  --- this will not work due to static 
console.log(User.createId()); //    ---- this wll work as due to static only class can access the function and not any instance of it.


console.log(teacher.createId); // this will work too as static method follow property of inheritance.

