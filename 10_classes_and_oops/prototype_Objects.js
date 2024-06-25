// Remember this means is
//  nhi samjha matlab - this matlab kisne bulaya hai isne
// for ex - "sourav".trueLength() => below function h ye usme jo this use ho rha h wo kya h wo "sourav" h.

function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`${this.username} is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea =  new createUser("tea", 25)

chai.printMe()

// ----------------------------Prototype in details-------------------

let myName = "sourav   "



String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

myName.trueLength()



let myHeroes = ["thor", "spiderman"]



let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

String.prototype.hitesh = function(){
    console.log(`hitesh is present is all of objects`);
}

// myName.hitesh()

//  Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport      // old method 
}

Teacher.__proto__ = User            // old method

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)  //newer approach
