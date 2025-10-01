// var keyword
var helloWorld = "Hello Javascript" // declaration and assignment, global scope;
console.log(helloWorld);

var helloWorld = "Hello Javascritp, again"; // we can re-declare and re-assign

// let keyword

let helloWorldLet = "Hello Javascript with let"; // declaration and assignment, it change the scope, that means it only works in the block where it is defined, local scope, cannot be re-declared
console.log(helloWorldLet);

helloWorldLet = "Hello Javascript with let, again"; // we can re-assign the value
console.log(helloWorldLet);

// const keyword

const helloWorldConst = "Hello Javascript with const"; // declaration and assignment, it change the scope, that means it only works in the block where it is defined, local scope, cannot be re-declared, cannot be re-assigned.
console.log(helloWorldConst);

/* Error:  
helloWorldConst = "Hello Javascript with const, again"; // we cannot re-assign the value, it will throw an error
console.log(helloWorldConst);
*/