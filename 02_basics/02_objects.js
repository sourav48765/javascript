// singelton => made from constructors
// object.create // like this


// objects literals

const mySym  =  Symbol("key1")



const JsUser = {
    name : "Sourav",
    "full name" : "Sourav Bisht",
    [mySym] : "mykey1",
    age : "21",
    email : "sourav@gmial.com",
    isLOggedIn : false,
    LastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser.full name);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySym);

JsUser.email = "souravbisht@gamil.com"
// Object.freeze(JsUser)
JsUser.email = "rohitbisht@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js User");
}
JsUser.greetingTwo = function(){
    console.log(`hello js User , ${this.name}`);
}

console.log(JsUser.greeting())
JsUser.greetingTwo()

