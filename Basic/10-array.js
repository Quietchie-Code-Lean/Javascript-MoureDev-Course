// ARRAYS STRUCTURE DATA: New data structure help us to store every kind of datatype

//DECLARATION: 
// We can declare an Array through use square brakets [ ] when declare a variable, that will declare an empty array.
// We can also use the keyword "new" following the keyword "Array()" to declare a data structure to store many values inside an array structure as a data list.

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
myArray2 = new Array(1, 2, 3, 4, 5) //with only a number we access to reserve empty items inside an array, but when we insert a list value we can store inside the array and its behavior works as a normal initialization of an array. 

console.log(myArray);
console.log(myArray2);

//We can initializate an array with string datatype

myArray = ["Lean", "Funes", "Code-Lean", 32, true]
myArray2 = new Array("Lean", "Funes", "Code-Lean", 32, true)  //Javascript allow us to store whatever type of data we want because of its dynamic typing.

console.log(myArray);
console.log(myArray2);

//How to assign values to the empty items of an array.
//We initialize again the array with new Array() structure to get 3 empty slots.

myArray2 = new Array(5);
myArray2[0] = "Quietchie";
myArray2[1] = "Code";                   //Even if we initialize an array in this way, and you initialize
myArray2[2] = "Lean";                   //five elements, and the input you made is 6 elemnents, automatically
myArray2[3] = 37 + "years";             //the structur datatype array add the slot needed to complete the array.
myArray2[4] = " ";
myArray2[5] = "false";

console.log(myArray2);

//We initialize again, with 6 empty slots instead 5, and let´s change the orther of the data list. 

myArray2 = new Array(6);
myArray2[5] = "Quietchie";
myArray2[4] = "Code";                   //Once the array is initialized, we can enter data and alter the order
myArray2[0] = "Lean";                   // of the list imtes or slots at will.
myArray2[3] = 37 + "years";             
/* myArray2[1] = "Not empty String"; */     //And this array, if we commen a code line, the behavior by default it 
myArray2[2] = 98123081038471298023487n      //will leave a empty slot on the possition the input was defined

console.log(myArray2);


//We test the same changes we´ve made upwards and let´s see how it change:
myArray = [];

myArray[1] = "Quietchie";
/* myArray[2] = "Code";  */                  //As we can watch, in this array structure, if we comment code lines
myArray[3] = "Lean";                         //the default behavior it  doesn´t change and automatically
myArray[4] = 37 + "years";                   //and return a new order list only with the known data.
/* myArray2[5] = "Not empty String"; */ 
myArray[6] = 98123081038471298023487n      

console.log(myArray);


//COMMON METHODS: 

myArray = [];

// PUSH and POP:

// PUSH: The .push() method add elements to an array at the end of it

myArray.push("Javascript");       
myArray.push("course");            //the 1º .push(), will be added in the [0] possition
myArray.push("Quietschie");         //the 2º .push(), will be added in the [0] possition
myArray.push(32);                    //the 3º .push(), will be added in the [0] possition
                                        //and so on with all the elements we add.
console.log(myArray);


//POP: The .pop() method delete the last elements of an array.

console.log(myArray.pop());      //pop delete the last element from an array and return it if it´s neccesary
myArray.pop();                    //we applyed .pop() twice, that´s why now we only have to elements in the array
                    
console.log(myArray);



//SHIFT and UNSHIFT:


//SHIFT method: The .shift() method delete the first element from an array and returns it

myArray.shift();
console.log(myArray);


//UNSHIFT method: the .unshift() method is used to put one or more elements to the biggining of an array.

myArray.unshift("New element", "Javascript", 2025);
console.log(myArray);

//LENGTH: It´s used to find how long and array or string can be. It´s not a method, but a propiety.


console.log(myArray.length);  //It show us how many elements there are within the array.
                                //Is not a method, so we don´t have to call it, we only add to the array
                                  //we wan´t to meansure its length.



//CLEAR: ways to clear an array.

myArray = [];            //Just initialize withoput values.
myArray.length = 0;       //ALTERNATIVE - We are defining the array length on 0.
console.log(myArray)


//SLICE: Returns a copy of a selection .slice(start, end)
myArray = ["Quiets", "Developer", "Lean", "Funes", "Javascript", 2025,"Code-Lean", 32, true];


let myNewArray = myArray.slice(2, 4) //It returns from 2 to 3 possition(it doesn´t count the 4 end possition)
console.log(myNewArray + " is my name");



//SPLICE: Removes elements from an array and, if neccesary, insert new element in their place, returning the deleted elements.

myArray.splice(2, 4);     //From 2nd possition(included) removes 4 elements of an array, the seccond parameter is the quantity of elements to remove.
console.log(myArray);

myArray = ["Quiets", "Developer", "Lean", "Funes", "Javascript", 2025,"Code-Lean", 32, true];

myArray.splice(6, 3, "Fullstack");  //We removes from 6th possition, 3 elements and add a new element "Fullstack"
console.log(myArray)



