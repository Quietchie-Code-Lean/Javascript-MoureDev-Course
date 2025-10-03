//STRINGS: (cadenas de texto)
// We can use single quotes, double quotes or backticks to create strings

//CONTATENATION: (concatenación)
let nickName = "Quietschie-Code-Lean";
let greeting = 'Hello, ' + nickName + ', welcome to javascript world!';
console.log(greeting);

//LENGTH: (longitud)
console.log(greeting.length); // it will return the length of the string

//ACCESSING CHARACTERS: (acceder a los caracteres)
console.log(greeting[0]); // it will return the first character of the string
console.log(greeting[25]); // it will return the first character of the string
console.log(greeting[greeting.length - 1]); // it will return the last character of the string

//COMMON METHODS: (métodos comunes)

console.log(greeting.length);
console.log(greeting.toUpperCase());    // it will return the string in uppercase.
console.log(greeting.toLowerCase());    // it will return the string in lowercase.
console.log(greeting.indexOf("Lean")); // it will return the index of the first occurrence of the substring "Lean".
console.log(greeting.indexOf("MoureDev"));  // it will return -1 because the substring "MoureDev" is not found in the string.
console.log(greeting.includes("Code")); // it will return true because the substring "code" is found in the string.
console.log(greeting.includes("Java")); // it will return false because the substring "Java" is not found in the string.
console.log(greeting.slice(5, 15)); // it will return the substring from index 5 to index 15 (not included).
console.log(greeting.replace("Quietschie-Code-Lean", "Code-Lean")); // it will return the string with the substring "Quietschie-Code-Lean" replaced by "MoureDev".


//TEMPLATE LITERALS: (literales de plantilla)

let message = `Hola este 
                es un mensaje
                de varias lineas`; // we can create strings with multiple lines using backticks.
console.log(message);


//Variables interpolation: (interpolación de variables)
let age = 32;
let presentation = `Hello, my nickname is ${nickName}, I am ${age} years old and I am learning Javascript!`;
console.log(presentation); // we can use ${} to insert variables or expressions inside the string.

let nextYearAge = `Next year I will be ${age + 1} years old`;
console.log(nextYearAge); // we can also use expressions inside the ${}.