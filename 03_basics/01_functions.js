// console.log("s");
// console.log("o");
// console.log("u");
// console.log("r");
// console.log("a");
// console.log("v");

function sayMyName(){
    console.log("s");
    console.log("o");
    console.log("u");
    console.log("r");
    console.log("a");
    console.log("v");
}

// sayMyName()

function addTwoNum(number1, number2=5){ // parameters
    // console.log(number1 + number2);
}

function addTwoNum(number1, number2=5){ // parameters
    
    return number1 + number2
   
}

const result = addTwoNum(5,8) //arguments

// console.log(result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    let result = 0
    for(let i=0; i<num1.length; i++){
     result += num1[i]   
    }
    return result
}

// console.log(calculateCartPrice(200,400,500));

const user = {
    username : "sourav",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// handleObject({
//     username : "dev",
//     price : 250
// })

function returnSecondValue(arr){
    return arr[1]
}

const myNewArray = [100,200,300,400]
// console.log(returnSecondValue(100,200,300,400));
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([100,200,300,400]));

