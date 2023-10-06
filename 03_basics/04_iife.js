// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();

//  ()() IIFE => Due to Global scope pollution, to remove it we have use IIFE
// Always remember to end the iife with semicolon ; so that the next iife can run 
((name) => {
    // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})("sourav")

