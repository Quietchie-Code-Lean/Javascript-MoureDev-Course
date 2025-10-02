//OPERATORS: are used to perform operations on variables and values


// ARITHMETIC OPERATORS:
let a = 10;
let b = 5;

console.log(a + b); // Addition: 15            
console.log(a - b); // Subtraction: 5          
console.log(a * b); // Multiplication: 50      
console.log(a / b); // Division: 2            
console.log(a % b); // Modulus(Remainder): 0   
console.log(a ** b); // Exponentiation: 100000

a++; // Increment: a = a + 1
console.log(a); // 11

b--; // Decrement: b = b - 1
console.log(b); // 4


// ASSIGNMENT OPERATORS:

let myVariable = 20;
console.log(myVariable); // 20

myVariable += 5; // myVariable = myVariable + 5
console.log(myVariable); // 25

myVariable -= 10; // myVariable = myVariable - 10
console.log(myVariable); // 15

myVariable *= 2; // myVariable = myVariable * 2
myVariable /= 5; // myVariable = myVariable / 5
myVariable %= 3; // myVariable = myVariable % 3
myVariable **= 4; // myVariable = myVariable ** 4


// COMPARISON OPERATORS:
let x = 10;
let y = 15;

console.log(x > y);             // Greater than: false         
console.log(x < y);             // Less than: true            
console.log(x >= y);            // Greater than or equal to: false
console.log(x <= y);            // Less than or equal to: true
console.log(x == y);            // Equal to (value): false
console.log(x == "10");         // Equal to (value): true
console.log(x === y);           // Non Strict Comparison: Equal to (value and type): false
console.log(x === 10);          // Strict comparison: Equal to (value and type): true
console.log(x != 10);           //  Negative: Not equal to (value): false
console.log(x !== "10");        // Negative: Not equal to (value and type): true
console.log(undefined == null); // true, because both represent absence of value
console.log(undefined === null);// false, because they are of different types


//TRUTHY VALUES (valores verdaderos en un contexto booleano)

        // All numbers except 0 (negative and positive)
        // All strings except empty string ""
        // true boolean
        // objects {}
        // arrays []
        // Infinity
        // -Infinity

// FALSY VALUES (valores falsos en un contexto booleano)

        // 0 number
        //0n BigInt
        // "" empty string
        // false boolean
        // null
        // undefined
        // NaN (Not a Number)


// LOGICAL OPERATORS: 
// used to combine multiple conditions, we identify if something is true or false and compare its boolean value.


// AND (&&) operator: returns true if both conditions are true, otherwise returns false
console.log(15 > 10 && 5 < 3); // false
console.log(15 > 10 && 5 > 3); // true
console.log(15 > 10 && 5 === 5); // true
console.log(15 < 10 && 5 === 5); // false
console.log(10 === 10 && 5 === 5 && 15 > 10); // true
console.log(10 === 10 && 5 === 5 && 15 < 10); // false

// OR (||) operator: returns true if at least one of the conditions is true, otherwise returns false
console.log(15 > 10 || 5 < 3); // true
console.log(15 > 10 || 5 > 3);  // true
console.log(15 < 10 || 5 === 6); // false
console.log(10 === 10 || 5 === 5 || 15 < 10); // true
console.log(10 === 10 && 5 === 6 || 15 < 10); // false


// NOT (!) operator: negates the boolean value of a condition, if the condition is true, it returns false, and if the condition is false, it returns true
console.log(!false); // true
console.log(!true); // false

console.log(!(15 > 10 && 5 > 3)); // false
console.log(!(15 < 10 || 5 === 6)); // true


// TERNARY OPERATOR: it is a shorthand for an if-else statement, it takes three operands: a condition, a value if the condition is true, and a value if the condition is false
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote" : "No, you cannot vote";
console.log(canVote); // Yes, you can vote