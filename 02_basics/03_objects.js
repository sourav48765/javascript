// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123Sourav"
tinderUser.name = "Sourav"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "sourav@gmail.com",
    fullname : {
        userfullname : {
            fisrtname : "sourav",
            lastname : "Bisht"
        } 
    }
}

// console.log(regularUser.fullname.userfullname.fisrtname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({},obj1, obj2, obj3) // (target, source)


const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);


const users = [
{
    id : 1,
    email : "h@gmail.com"
},
{
    id : 1,
    email : "hff@gmail.com"
},
{
    id : 1,
    email : "h@gmail.com"
},
{
    id : 1,
    email : "h@gmail.com"
}
]

// console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "sourav"
}

const {courseInstructor : instructor} = course
const {price : prices} = course

console.log(instructor);  
console.log(prices);  
console.log(course.price);  

// {
//     "name": "Sourav",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

