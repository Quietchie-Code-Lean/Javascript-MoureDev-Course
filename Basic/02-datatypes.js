// Datatypes: Primitives

//STRING (cadena de texto)
let myName = "Leandro Funes"
let userName = 'Quietschie-Code-Lean'
let nick = `Lean`
console.log( myName, userName, nick);

//NUMBER (número)
let age = 32; // integer (entero)
let weight = 85.5; // float (decimal)
console.log(age, weight);

//BOOLEAN (booleano)
// true (verdadero) or false (falso)
let isDeveloper = false;
let isStudent = true;       
console.log(isDeveloper, isStudent);


//UNDEFINED (indefinido)
let UndefinedValue; // we declare the variable but we don't assign any value, so it is undefined



//NULL (nulo)
let nullValue = null; // we assign the value null to the variable, so it is null
console.log(nullValue);


//SYMBOL (símbolo)
let symbolValue = Symbol("mySymbol"); // we create a symbol with the description "mySymbol" used to create unique identifiers for object properties
console.log(symbolValue);
console.log(typeof symbolValue); // we use the typeof operator to check the datatype of the variable, it will return "symbol"


//BIGINT (entero grande)
let bigIntValue = 9007199254741991n; // we create a bigint by adding the letter "n" at the end of the number, used for very large integers
console.log(bigIntValue);


//DATATYPE CHECK
console.log(typeof myName);
console.log(typeof age);
console.log(typeof weight);
console.log(typeof isDeveloper);
console.log(typeof isStudent); 
console.log(typeof UndefinedValue);
console.log(typeof nullValue); // it will return "object" but it is a bug in javascript, null is not an object
console.log(typeof symbolValue); 
console.log(typeof bigIntValue);