// ARRAYS: New data structure help us to store every kind of datatype

//DECLARATION: 
// We can declare an Array through use square brakets [ ] when declare a variable, that will declare an empty array.
// We can also use the keyword "new" following the keyword "Array()" to declare a data structure to store many values inside a variable.

let myArray = [];     // Recomended: simple syntaxys, leaves no room for errors
let myArray2 = new Array();

console.log(myArray);
console.log(myArray2);

//INITIALIZATION:

myArray = [3]                       //We already insert and store a numeric value to the array
myArray2 = new Array(3);            //With this syntaxys, we are reserving an empty item within the array, this example will create a data structure atyle array with 3 empty items to wait be filled later.

console.log(myArray);
console.log(myArray2);

//We can initialize an array with data numbers.

myArray = [1, 2, 3, 4, 5]
myArray2 = new Array(1, 2, 3, 4, 5) //with only a number we access to reserve empty items in an array, but when we insert a list value we can store inside the array and its behavior works as a normal initialization os an array. 

console.log(myArray);
console.log(myArray2);

//We can initializate an array with string datatype

myArray = ["Lean", "Funes", "Code-Lean", 32, true]
myArray2 = new Array("Lean", "Funes", "Code-Lean", 32, true)  //Javascript allow us to store whatever type of data we want because of its dynamic typing.

console.log(myArray);
console.log(myArray2);

myArray2 = new Array(3);
myArray2[0] = "Quietchie";
myArray2[1] = "Code";
myArray2[2] = "Lean";

console.log(myArray2);