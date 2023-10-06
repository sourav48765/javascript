// var c = 300
let a = 300


if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner : "+a);
}

// console.log(a);  // this will not work outside of a scope
// console.log(b);  // this too
// console.log(a);     // this fucker will 


function one(){
    const username = "sourav"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "sourav"
    if(username === "sourav"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++++ interseting ++++++++++

addone(5)
function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){ // Hoisting
    return num+2
}

