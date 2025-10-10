// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 0; i < 20; i++){
    console.log(`Number: ${i+1}`);
};

console.log("--------End Exersise 1---------");

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

console.log("Loop... for");
let suma = 0;
for (let i = 0; i <= 100; i++){
    suma += i;
    }console.log(suma);


console.log("Loop... while");
let addition = 0;
let i = 0;
while(i <= 100){
    addition += i;
    i++

}console.log(addition);

console.log("--------End Exersise 2---------");
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

console.log("Loop... for");
for(let i = 0; i <= 50; i++){
    if(i % 2 === 0){
        console.log(i)
    }
};

console.log("Loop... while");
let j = 0;
while(j <= 50){
    j % 2 === 0;
    console.log(j);
    j++;
};

console.log("--------End Exersise 3---------");
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

console.log("Loop... for");
arrayNames = ["Winston Smith", "Emmanuele Goldstein", "Unnamed O´Brien", "Big Brother", "Mr. Charringtons"];
for(let i = 0; i < arrayNames.length; i++){
    console.log(arrayNames[i]);
};

console.log("Loop... while");
arrayNames = ["Winston Smith", "Emmanuele Goldstein", "Unnamed O´Brien", "Big Brother", "Mr. Charringtons"];
let k = 1;
while(k < arrayNames.length){
    console.log(arrayNames[k]);
    k++
}

console.log("--------End Exersise 4---------");
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

console.log("Loop... for");
let stringVowels = "the number of vowels in a string";
let vowels = 0;
for(let i = 0; i < stringVowels.length; i++){
    if(stringVowels[i] === "a"){
        vowels += 1;
    }else if(stringVowels[i] === "e"){
        vowels += 1;
    }else if(stringVowels[i] === "i"){
        vowels += 1;
    }else if(stringVowels[i] === "o"){
        vowels += 1;
    }else if(stringVowels[i] === "u"){
        vowels += 1;
    };
}console.log(vowels);

console.log("Loop... while");

stringVowels = "ThE NuMbEr oF VoWeLs In A StRiNg";
let newVowels = stringVowels.toLowerCase()

vowels = 0;
let l = 0;
while(l < newVowels.length){
    if(
        newVowels[l] === "a" ||
        newVowels[l] === "e" ||        //Other way to use few conditions within only one "if"
        newVowels[l] === "i" ||         //This is a good practice, without rooms to error.
        newVowels[l] === "o" ||         //
        newVowels[l] === "u"
    )
    {
        vowels += 1;
    }l++;
    }console.log(vowels);

console.log("--------End Exersise 5---------");
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let multiArray = [1, 2, 3, 4, 5]
let product = 1;
for( let num of multiArray){
    product *= num;
}console.log(product);

console.log("--------End Exersise 6---------");
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5


console.log("--------End Exersise 7---------");
// 8. Usa un bucle para invertir una cadena de texto


console.log("--------End Exersise 8---------");
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci


console.log("--------End Exersise 9---------");
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

console.log("--------End Exersise 10---------");