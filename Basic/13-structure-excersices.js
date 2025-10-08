// 1. Crea un array que almacene cinco animales

let animalArray = [];
animalArray[0] = "Lizard";
animalArray[1] = "Albatross";
animalArray[2] = "Cat";
animalArray[3] = "Dog";
animalArray[4] = "Monkey";
console.log(animalArray);

let myArrayAnimals = ["Monkey", "Dog", "Cat", "Albatross", "Lizard"];
console.log(myArrayAnimals)

let myCatArray = new Array("Cat", "michi", "katto", "kitty", "Miau", "Cat");
console.log(myCatArray);
console.log("-----------End excersice 1---------");

// 2. Añade dos más. Uno al principio y otro al final

myCatArray.push("Cat-end");
myCatArray.unshift("Cat-front");
console.log(myCatArray);
console.log("-----------End excersice 2---------");

// 3. Elimina el que se encuentra en tercera posición

myCatArray.splice(3, 1);
console.log(myCatArray);
console.log("-----------End excersice 3---------");

// 4. Crea un set que almacene cinco libros

let mySetBooks = new Set([
    "Cartas do meu mohino - ALPHONSE DAUDET",
    "Before the coffee gets cold - TOSHIKAZU KAWAGUCHI",
    "The Power of now - ECKHART TOLLE",
    "Cem Anos de Solidão - GABRIEL GARCIA MARQUEZ",
    "1984 - GEORGE ORWELL"
]);
console.log(mySetBooks);
console.log("-----------End excersice 4---------");


// 5. Añade dos más. Uno de ellos repetido

mySetBooks.add("Blood and Fire - BILL KNOX");
mySetBooks.add("The Power of now - ECKHART TOLLE");
console.log(mySetBooks);
console.log("-----------End excersice 5---------");
// 6. Elimina uno concreto a tu elección

mySetBooks.delete("The Power of now - ECKHART TOLLE");
console.log(mySetBooks);
console.log("-----------End excersice 6---------");

// 7. Crea un mapa que asocie el número del mes a su nombre

myMonthMap = new Map([
    [1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "Dicember"]
]);
console.log(myMonthMap);
console.log("-----------End excersice 7---------");

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if(myMonthMap.has(5)){
    console.log(myMonthMap.get(5));
}else{
    console.log("Fuck of with that month")
};
console.log("-----------End excersice 8---------");

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let arrayMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function summerMonths(arrayMonth){
    let summer = [];
    for(let i=0; i<arrayMonth.length; i++){
        if(arrayMonth[i] > 6 && arrayMonth[i] < 10){
            summer.push(arrayMonth[i]);
        }
    }return summer;
}console.log(summerMonths(arrayMonth));

myMonthMap.set(summerMonths(arrayMonth));
console.log(myMonthMap);

console.log("-----------End excersice 9---------");

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

arrayCoerce = new Array("Example 1", "Example 2", "Example 3", "Example 4");
console.log(arrayCoerce);

mySetCoerce = new Set(arrayCoerce);
console.log(mySetCoerce);

let myBiggerMap = new Map([
    ["mp1", 1],
    ["mp2", 2],                 
    ["mp3", 3],
    ["mp4", 4],
    ["mp5", 5]
]);
myBiggerMap.set(mySetCoerce);
console.log(myBiggerMap);

console.log("-----------End excersice 10---------");