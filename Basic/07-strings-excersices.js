// 1. Concatena dos cadenas de texto

let myName = "Leandro";
let mySurName = "Funes";

let fullName = myName + " " + mySurName;
console.log(fullName);
console.log("-----------End excersice 1---------");

// 2. Muestra la longitud de una cadena de texto

console.log(fullName.length);
console.log("-----------End excersice 2---------");

// 3. Muestra el primer y último carácter de un string

console.log(fullName[0]);
console.log(fullName[fullName.length - 1]);
console.log("-----------End excersice 3---------");

// 4. Convierte a mayúsculas y minúsculas un string

let testString = "This is a Test String";
console.log(testString.toUpperCase());
console.log(testString.toLowerCase());
console.log("-----------End excersice 4---------");

// 5. Crea una cadena de texto en varias líneas

 let multiLineString = `This is a 
 multi-line string`;
 console.log(multiLineString);
 console.log("-----------End excersice 5---------");

// 6. Interpola el valor de una variable en un string
let day = "Friday";
let data = "October 03th";
let year = 2025;
let doingWhat = "learning JavaScript";

let dataString = `Today is ${day}, ${data}, ${year} and I am ${doingWhat}`;
console.log(dataString);
console.log("-----------End excersice 6---------");


// 7. Reemplaza todos los espacios en blanco de un string por guiones

let stringWithSpaces = "This is a string with spaces";
let stringWithoutSpaces = stringWithSpaces.replace(/ /g, "-");  // Using global flag "g" and / / regex delimitators(inside we add the patern we want to switch) to replace all spaces.
let stringWithoutSpaces2 = stringWithSpaces.split(" ").join("-"); // Alternative method using split and join.
console.log(stringWithoutSpaces);
console.log(stringWithoutSpaces2);
console.log("-----------End excersice 7---------");

// 8. Comprueba si una cadena de texto contiene una palabra concreta

let phrase = "There is not enough Javascript in the world to express how much I love it";

console.log(phrase.includes("Javascript"));
console.log(phrase.includes("Python"));
console.log("-----------End excersice 8---------");

// 9. Comprueba si dos strings son iguales

let string1 = "Hello World";
let string2 = "Hello World!";

console.log(string1 === string2);
console.log("-----------End excersice 9---------");


// 10. Comprueba si dos strings tienen la misma longitud

let firstString = "JavaScript";
let secondString = "TypeScript";

console.log(firstString.length === secondString.length);
console.log("-----------End excersice 10---------");

