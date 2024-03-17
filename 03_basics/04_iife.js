// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// global scope polution creates problem (global scope declarations or variables) to avoid polution of global scope so remove polution we have used iife
//()() like this
// first code needed to be end by the use of parenthisis ; to exicute next function
( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('ayush')
// chai('ayush')