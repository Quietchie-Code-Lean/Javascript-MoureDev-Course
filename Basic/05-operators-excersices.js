// 1. Crea una variable para cada operación aritmética

let k = 25;
let m = 13;

let add = k + m;          // Addition :25 + 13 = 38
console.log(add);
let sub = k - m;          // Subtraction :25 - 13 = 12
console.log(sub);
let mul = k * m;         // Multiplication  :25 * 13 = 325
console.log(mul);
let div = k / m;         // Division :25 / 13 = 1.9230769230769231 
console.log(div);
let mod = k % m;         // Modulus (Remainder) :25 % 13 = 12
console.log(mod);
let exp = k ** m;        // Exponentiation :25 ** 13 = 59604644775390625
console.log(exp);

let increase = 10;
let decrease = 100;

increase++;                      // Increment: increase = increase + 1
decrease--;                      // Decrement: decrease = decrease - 1
console.log(increase);
console.log(decrease);

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let myVar = 50;

myVar += add;    // myVar = myVar + add
console.log(myVar);

myVar -= sub;    // myVar = myVar - sub
console.log(myVar);

myVar *= mul;    // myVar = myVar * mul
console.log(myVar);

myVar /= div;    // myVar = myVar / div
console.log(myVar);

myVar %= mod;    // myVar = myVar % mod
console.log(myVar);

myVar **= exp;   // myVar = myVar ** exp
console.log(myVar);

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(25 =="25");
console.log(25 === 25);
console.log(1234 > 123);
console.log(50 <= 100);
console.log(65 !== "65");

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(30 == 15);
console.log(25 === "25");
console.log( 150 > 9876);
console.log(87 <= 78);
console.log(126 !== 126)


// 5. Utiliza el operador lógico and

let height = 0;
let age = 0;

function rollerCoaster(height, age){
    if (height >= 135 && age >= 18){
        return "You can enter the ride";
    }else { 
        return "You cannot enter the ride";
} 
}
console.log(rollerCoaster(180, 20));
console.log(rollerCoaster(125, 25));
console.log(rollerCoaster(140, 15));

// 6. Utiliza el operador lógico or

function movieAccess(age, hasTicket){
    if( age >= 16 || hasTicket === true){
        return "You can watch the movie";
    } else {
        return "You cannot watch the movie";
    };
};
console.log(movieAccess(18, true));
console.log(movieAccess(14, false));
console.log(movieAccess(12, true));

// 7. Combina ambos operadores lógicos

function clubEntry(age, hasInvitation, specialGuest){
    if(age >= 18 && hasInvitation === true || specialGuest === true){
        return "You can enter the club";
    } else {
        return "You cannot enter the club";
    };
};
    console.log(clubEntry(30, true, false));
    console.log(clubEntry(17, false, true));
    console.log(clubEntry(16, false, false));


// 8. Añade alguna negación

function canDrive(age, hasLicense){
    if(!(age < 18) && hasLicense === true){
        return "You can drive";
    } else {
        return "Let's go to jail";
    };
};
console.log(canDrive(20, true));
console.log(canDrive(16, true));
console.log(canDrive(22, false));

// 9. Utiliza el operador ternario

age = 20;
let userAge = (age >= 18) ? "You are an adult" : "You are a minor";
console.log(userAge);

// 10. Combina operadores aritméticos, de comparáción y lógicas

function productDiscount(price, discount, isMember){
    let finalPrice = price - (price * discount / 100);
    if(finalPrice > 50 && isMember === true){
        return "You get free shipping";
    } else {
        return "You have to pay for shipping";
    };
};
console.log(productDiscount(120, 20, true));
console.log(productDiscount(40, 10, true));
console.log(productDiscount(80, 15, false));

