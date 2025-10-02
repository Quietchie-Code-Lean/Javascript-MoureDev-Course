// 1. Escribe un comentario en una línea

        // keyboard shortcut: ctrl + ~ (windows HP)
        // allows you to comment or uncomment a line
        // Este es un comentario en una línea.

// 2. Escribe un comentario en varias líneas
        /*
        keyboard shortcut: shift + alt + A
        allows you to comment multiple lines at once
        
        This is a comment, you can
        write what you want here
        */
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

        let myString = "Javascript code";           // STRING
        let myNumber = 42;                          // NUMBER
        let myBooleanTrue = true;                   // BOOLEAN
        let myBooleanFalse = false;                 // BOOLEAN 
        let myUndefined;                            // UNDEFINED
        let myNull = null;                          // NULL
        let mySymbol = Symbol("mySymbol");          // SYMBOL
        let myBigInt = 9871238712497621896124n;     // BIGINT

// 4. Imprime por consola el valor de todas las variables

        /* We can use console.log to visualize in console values of variables */
        console.log(myString);
        console.log(myNumber);
        console.log(myBooleanTrue);
        console.log(myBooleanFalse);
        console.log(myUndefined);
        console.log(myNull);
        console.log(mySymbol);
        console.log(myBigInt);

// 5. Imprime por consola el tipo de todas las variables

        /* We can use typeof operator to check the datatype of a variable */
        console.log(typeof myString);
        console.log(typeof myNumber);
        console.log(typeof myBooleanTrue);
        console.log(typeof myBooleanFalse);
        console.log(typeof myUndefined);
        console.log(typeof myNull);
        console.log(typeof mySymbol);
        console.log(typeof myBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
        /* it allos us to redeclare variables by accessing to the and typing another value */
        myString = "Another Javascript code";
        myNumber = 84;
        myBooleanTrue = false;
        myBooleanFalse = true;
        myUndefined = undefined;   // we can re-assign undefined to the variable
        myNull = null;
        mySymbol = Symbol("anotherSymbol");
        myBigInt = 12345678901234567890n;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
        
        myString = 100;               // now it is a NUMBER
        myNumber = "Now I am a string"; // now it is a STRING
        myBooleanTrue = "true";           // now it is a STRING
        myBooleanFalse = 0;              // now it is a NUMBER
        myUndefined = null;        // now it is a NULL
        myNull = undefined;      // now it is UNDEFINED
        mySymbol = 12345;        // now it is a NUMBER
        myBigInt = false;        // now it is a BOOLEAN

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

        const myConstString = "Constant Javascript code";           // STRING
        const myConstNumber = 42;                                   // NUMBER
        const myConstBoolean = true;                                // BOOLEAN
        const myConstUndefined = undefined;                         // UNDEFINED
        const myConstNull = null;                                   // NULL
        const myConstSymbol = Symbol("myConstSymbol");              // SYMBOL
        const myConstBigInt = 9871238712497621896124n;              // BIGINT

// 9. A continuación, modifica los valores de las constantes

        /* Error:
        // we cannot re-assign the value, it will throw an error
        
        myConstString = "Another Constant Javascript code";           
        myConstNumber = 84;
        myConstBoolean = false;
        myConstUndefined = null;
        myConstNull = undefined;
        myConstSymbol = Symbol("anotherConstSymbol");
        myConstBigInt = 12345678901234567890n;
        */ 

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse