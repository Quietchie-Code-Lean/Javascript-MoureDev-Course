// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Leandro";

if (myName ==="Leandro"){
    console.log(myName);
}
console.log("-----------End excersice 1---------");

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let username = "Quietschie";
let password = "12345";

if (username === "Quietschie" && password ==="12345"){
    console.log("Welcome " + username);
};
console.log("-----------End excersice 2---------");

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = -32;
if (number === 0){
    console.log("The number is 0");
}else if (number > 0){
    console.log("the number is positive");
}else{
    console.log("the number is negative");
};
console.log("-----------End excersice 3---------");

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let citizenAge = 15;
if (citizenAge >= 18){
    console.log("you can vote");
}else{
    console.log("you can't vote, you need " + (18 - citizenAge) + " more years" );
};
console.log("-----------End excersice 4---------");

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let personAge = 20;
let adulrOrMinor = personAge >= 18 ? "adult" : "minor";
console.log(adulrOrMinor);
console.log("-----------End excersice 5---------");

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let month = 5;

if(month >= 4 && month <= 6){
    console.log("we are in spring");
}else if (month >= 7 && month <= 9){
    console.log("We are in summer");
} else if(month >=10 && month <= 12){
    console.log("we are in autumn");
}else if(month >= 1 && month <= 3){
    console.log("we are in winter");
};
console.log("-----------End excersice 6---------");


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior


if (month === 1){
    console.log("January has 31 days");
}else if (month === 2){
    console.log("February has 28 days");
}else if (month === 3){
    console.log("March has 31 days");
}else if (month === 4){
    console.log("April has 30 dyas");
}else if (month === 5){
    console.log("May has 31 days");
}else if (month === 6){
    console.log("June has 30 days");
}else if (month === 7){
    console.log("July has 31 days");
}else if (month === 8){
    console.log("August has 31 days");
}else if (month === 9){
    console.log("September has 30 days");
}else if (month === 10){
    console.log("October has 31 days");
}else if (month === 11){
    console.log("November has 30 days");
}else if (month === 12){
    console.log("December has 31 days");
}else if (month > 12 || month < 1){
    console.log("The month doesn't exist");
};
console.log("-----------End excersice 7---------");

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let greetingLang = "ITALIAN";

switch (greetingLang){
    case "ENGLISH":
        console.log("Hello Javascript Developer");
        break;
    case "SPANISH":
        console.log("Hola Desarrollador de Javascript");
        break;
    case "FRENCH":
        console.log("Bonjour Développeur Javascript");
        break;
    case "GERMAN":
        console.log("Hallo Javascript Entwickler");
        break;
    case "ITALIAN":
        console.log("Ciao Sviluppatore Javascript");
        break;
    case "PORTUGUESE":
        console.log("Olá Desenvolvedor Javascript");
        break;
    default:
        console.log("Hello Javascript Developer"); //Default case if no other case matches.
};
console.log("-----------End excersice 8---------");

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let seasson;

switch (month){
    case 1:
        seasson = "Winter";
        break;
    case 2:
        seasson = "Winter";
        break;
    case 3:
        seasson = "Winter";
        break;
    case 4:
        seasson = "Spring";
        break;
    case 5:
        seasson = "Spring";
        break;
    case 6:
        seasson = "Spring";
        break;
    case 7:
        seasson = "Summer";
        break;
    case 8:
        seasson = "Summer";
        break;
    case 9:
        seasson = "Summer";
        break;
    case 10:
        seasson = "Autumn";
        break;
    case 11:
        seasson = "Autumn";
        break;
    case 12:
        seasson = "Autumn";
        break;
    default: "That seasson doesn't exist";
};
console.log(seasson);

console.log("-----------End excersice 9---------");

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let daysInAMonth;

switch(month){
    case 1:
        daysInAMonth = "Januart has 31 days"
        break;
    case 2:
        daysInAMonth = "February has 28 days"
        break;
    case 3:
        daysInAMonth = "March has 31 days"
        break;
    case 4:
        daysInAMonth = "April has 30 days"
        break;
    case 5:
        daysInAMonth = "May has 31 days"
        break;
    case 6:
        daysInAMonth = "June has 30 days"
        break;
    case 7:
        daysInAMonth = "July has 31 days"
        break;
    case 8:
        daysInAMonth = "August has 31 days"
        break;
    case 9:
        daysInAMonth = "September has 30 days"
        break;
    case 10:
        daysInAMonth = "October has 31 days"
        break;
    case 11:
        daysInAMonth = "November has 30 days"
        break;
    case 12:
        daysInAMonth = "Dicenber has 31 days"
        break;
}; 
console.log(daysInAMonth);

console.log("-----------End excersice 10---------");
