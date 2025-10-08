//MAP: An Map, or dicctionary, as we can find it on other lenguages, it´s basically a collection of elements, 
        //and eache element in this case isn´t unique, within this data structure eache element is made up of a pair, called(key : Value). We will be able to store any type of data.
        //In this structure each key will have its asociate value


//DECLARATION: To declare a MAP data structure, we have to use the reserved keyword "new Map()"

let myMap = new Map();
console.log(myMap);


//INITIALIZATION:  To initialize propetly a Map, we have to use square brackets [] to enclosed the set of key:value elements, and each element with their respect pair key:value enclosed again with square brackets, and separate with coma ( , ) one to each other.

myMap = new Map([
    ["name", "Leandro"],
    ["last name", "Funes"],                         //Pairs key:value separated by comas.
    ["email", "leafunes.world@gmail.com"],
    ["Age", 32],
    ["Nickname", "Quiets-code-Lean"],
]);

console.log(myMap);


//COMMON METHODS AND PROPETIES:


//SET: Add a new element with an specific key and value to the map, if the element with the same key
        //already exist, this, will be update.

myMap.set("Example", "value");
myMap.set("nickname", "Code-QuietsDev");  //As we can observe, the method .set() only will update the value of 
console.log(myMap); //key, if the key itself is strictly the same ("Nickname" and "nickname") isn´t the same, 
                    //that´s why it add a new //key:value instead of changing the value of the existing key, as was originally my idea. 


//GET:      Returns the element associated with a specified key from the Map, if no element is associated with
            //the asociated key, undefined is returned.


console.log(myMap.get("name"));         // the propiety .get() always usa the key as comparison, never use the  
console.log(myMap.get("surname"));      //value of a key:value pair to function.


//HAS:    Returns a boolean indicating whether the element with the specified key exist or not.

console.log(myMap.has("last name"));
console.log(myMap.has("year"));

//DELETE:

myMap.delete("Example");
myMap.delete("Nickname");
console.log(myMap);

//KEYS:   Returns an iterable of keys in the map

console.log(myMap.keys());

//VALUES:

console.log(myMap.values());

//CLEAR: 

myMap.clear();
console.log(myMap);











