// foreach loop

const coding = ["1","rb","py"]

coding.forEach( function (item){ // callback function
    // console.log(item);
})

coding.forEach( (element) => { 
    // console.log(element);
});

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    if (item === "1"){
    console.log(item, arr);
    }
})

// How to use objects in an array using forEach loop
const myCoding = [
    {
        languageName : "javascript",
        languagefileName : "js"
    },
    {
        languageName : "java",
        languagefileName : "java"
    },
    {
        languageName : "python",
        languagefileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
