//SET:


//DECLARATION: unlike arrays, the data structure SET has only one way to be declared.

let mySet = new Set();    //We use the syntaxis new Set() to declare an empty set.
console.log(mySet);

//INITIALIZATION: to correctly initialize a new Set() we have to use the square brackets []

mySet = new Set(["Developer", 32,"Lean", "Funes", "Javascript", 2025]);
console.log(mySet);

//COMMON METHODS: 

// ADD:

mySet.add("https://Quietschie.dev")     // Add an element at the end of a Set()
console.log(mySet);


//DELETE: Removes a specific value from a SET. Return true if an element in the set existed and has been removed,
            //or false if the element does not exist.

/* mySet.delete(4)     using idex possition doesn´t work */
mySet.delete("Funes");     //To delete an element we´ve to indicate concretelly which element we want to delete
console.log(mySet);         //the structure SET, even is if an ordenate list with known possitions, it doesn´t make
                            //any reference to the index where the elements are. That´s Why we can delete an element
                            //using its index

console.log(mySet.delete("https://Quietschie.dev"));   //this return TRUE because the element has been deleted
console.log(mySet);

// HAS:  Returns a boolean indicating whether an element with the specified value exist in the set or not

console.log(mySet.has("Javascript"));
console.log(mySet.has("https://Quietschie.dev"));

//SIZE: Returns number of unique elements in SET 

console.log(mySet.size);


//COERCES SET to ARRAY:  Creates an array from an set or an iterable object

let myArray = Array.from(mySet);
console.log(myArray)


//COERCES ARRAY to SET: Creates an set from an Array.

mySet = new Set(myArray);    //We have recovered the same SET we had before.
console.log(mySet);

//DOES NOT ALLOW DUPLICATES

mySet.add("leafunes.world@gmail.com");     //The most meaningful change between array and set, is SET doesn´t
mySet.add("leafunes.world@gmail.com");      //allow duplicates, it only accept once the same data, that´s also why
                                            //isn´t extremely necesary to access to specific index. 
                                            //it will only have one equal value of each data.


mySet.add("Leafunes.world@gmail.com"); //The element must be identical, if the element changes, it will be added as a new element.
console.log(mySet);  
