//CONDITIONALS: structures that allow us to control the flow of our code based on certain conditions.

//if, else if, else statements:

//if: evaluates a condition, if true, executes the block of code inside it.

let age = 32;

if (age === 32) {
    console.log("You are 32 years old"); //block of code to be executed if the condition is true
};

//else: executes a block of code if the condition in the if statement is false.

age = 30;


if (age === 32) {
    console.log("You are 32 years old");
} else {
    console.log("you are not 32 years old");
};

//else if: allows us to check multiple conditions in sequence.

age = 16 ;

if (age === 32) {
    console.log("You are 32 years old");
} else if (age < 18){
    console.log("You are a minor");
}else{ 
    console.log("You are an adult");
};


// Ternary operator: a shorthand way of writing an if-else statement.
age = 25;

let isAdult = age >= 18 ? "You are an adult" : "You are a minor";
console.log(isAdult); // Output: You are an adult

//SWITCH statement: a control structure that allows us to evaluate a variable against multiple possible values (cases) and execute different blocks of code based on which case matches.

let month = 10;
let monthName;

switch (month){
    case 1:
        monthName = "January";
        break; //break is used to exit the switch statement once a case is matched and its code is executed.
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    case 8:
        monthName = "August";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "October";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "December";
        break;
    default: //default case is executed if none of the above cases match.
        monthName = "Invalid month";

} console.log(monthName); // Output: October

