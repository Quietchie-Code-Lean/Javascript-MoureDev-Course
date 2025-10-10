//LOOPS (bucles): Its directly asociated at constrol structures, loops are escential to be able to repeat a block of code several times until a condition is met.

//There are several types of Loops in Javascript:

//FOR: the for Loop is one of the most used Loops in programming. It has three parts: The initialization, the condition and the final expression. The condition is evaluated before each iteration, and if it is true, the code block inside the loop will be executed. If it is false, the Loop will end.

console.log("--------FOR--------");
for (let i = 0; i < 5; i++){
    console.log(`Hello Javascript ${i}`)
};

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for(let i = 0; i < numbers.length; i++){
    console.log(`Item ${numbers[i]}`)
};

//WHILE: The while Loop is another type of loop that executes a block of code as long as a specified condition is true. The condition is evaluated before each iteration, so if the condition is false at the beginning, the code block will not be executed at all.
//This loop is useful when the number of iterations is not known in advance.
//External condition is needed to avoid infinite loops.
console.log("--------WHILE--------");
let i = 0;

while (i < 5) {
    console.log(`Hello Javascript ${i}`)
    i++
};


// DO WHILE: The do...while Loop is similar to the while Loop, but with one key difference: the code block is executed at least once before the condition is evaluated. This means that even if the condition is false at the beginning, the code block will still be executed once.
console.log("--------DO WHILE--------");
i = 6;

do{
    console.log(`Hello Javascript ${i}`)
    i++
}while(i < 5);  //It only executes once because the condition is false from the start.



//FOR OF: The for...of Loop is a newer addition to JavaScript (introduced in ES6) that provides a simpler way to iterate over iterable objects, such as arrays, strings, maps, sets, and more. It allows you to loop through the values of an iterable directly, without needing to manage an index variable.
console.log("--------FOR of--------");

for (let value of numbers){
    console.log(value);
};

//We can use with strings, arrays, maps, sets, and more.

myArray = ["Developer", 105, "ES6" , 2025, 32,];

mySet = new Set(["Developer", 32,"Lean", "Funes", "Javascript", 2025]);

myMap = new Map([
    ["name", "Leandro"],
    ["last name", "Funes"],                         //Pairs key:value separated by comas.
    ["email", "leafunes.world@gmail.com"],
    ["Age", 32],
    ["Nickname", "Quiets-code-Lean"],
]);

myString = "Hello, QuietschieDev";

console.log("--------FOR of myArray--------");
for (let value of myArray){
    console.log(value);
};

console.log("--------FOR of mySet--------");
for (let value of mySet){
    console.log(value);
};

console.log("--------FOR of myMap--------");
for (let value of myMap){
    console.log(value);
};

console.log("--------FOR of myString--------");
for( let value of myString){
    console.log(value);
};


//GOOD PRACTICES:


//BREAK and CONTINUE: The break statement is used to exit a loop or switch statement before it has completed all its iterations. When the break statement is encountered, the loop or switch statement is immediately terminated, and the program continues executing the code that follows it.



console.log("--------BREAK--------");

for (let i=0; i<10; i++){
    if ( i == 5){
        continue;                  //When i is equal to 5, the continue statement is executed, which skips the 
    } else if ( i == 8){          //rest of the loopbody for that iteration and moves on to the next iteration.
        break;                     //When i is equal to 8, the break statement is executed, which immediately 
    };                              //terminates the loop.
console.log(`Break at 8 and continue at 5 ${i}`);
}