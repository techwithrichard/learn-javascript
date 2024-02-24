// variables
// data types
// operators
// functions
// loops
// conditionals\\
// 1. variables
// var, let, const
let name="learning javascript"
const PI = 3.142; //cont values cannot be changed
let age = 25;
let isMarried = false;
let person = {
    name: "John",
    age: 30,
    isMarried: false,

};

console.log(name, PI, age, isMarried, person);

// 2. Data Types
// Primitive data types -> strings, Numbers/Integers, boolean, Undefined, Null, Symbol
// Complex Data Types -> objects, arrays, 

/* Primitive Data Types:

Number: Represents numeric values. It can be integers or floating-point numbers.
String: Represents a sequence of characters, enclosed within single or double quotes.
Boolean: Represents a logical value, either true or false.
Undefined: Represents a variable that has been declared but has not been assigned a value.
Null: Represents the intentional absence of any object value.
Symbol: Represents a unique identifier, introduced in ECMAScript 6.

Complex Data Types:

Object: Represents a collection of key-value pairs, where keys are strings (or symbols) and values can be any data type, including other objects.
Function: Represents executable code, often associated with an object.
*/

let num = 21;
let str = "Hello world, welcome to coding with javascript"
 let bool = true; //let isMarried = false;
 let undef;
 let nul = null;
 let symb = Symbol("foo")

//  object
let obj = {
    key:"value",
}

// function
function add(a, b){
    return a + b
}

// output
console.log("Number", num);
console.log("String", str);
console.log("Boolean", bool);
console.log("Undefined", undef);
console.log("Null", nul);
console.log("Symbol", symb);
console.log("Object", obj);
console.log("Function", add(5,4));

// exercise
/* 
Create a variable favoriteColor and assign your favorite color as a string.
Create a variable temperature and assign a number to it.
Create a variable isRaining and assign a boolean value to represent whether it's raining or not.
Create an array fruits containing the names of three fruits.
Create an object car with properties brand, model, and year.
*/



const displayResults = ()=>{
    let favouriteColor = "blue";
    let temp = 15;
    let isRaining = false;
    let fruits = ["Banana", "Mango", "Grapes"]

    let car = {
        brand:"Toyota",
        model: "Harrier",
        year:2015
    }

    return {
        favouriteColor,
        temp,
        isRaining,
        fruits,
        car,
    }
}

let results = displayResults()
console.log(results)

// let {favouriteColor, temp, isRaining, fruits} = displayResults();



// 3. operators


// 4. functions
// 5. loops
// 6. conditionals


