// variables.js

// Variables in JavaScript are used to store data that can be referenced and manipulated in a program.
// There are three main ways to declare variables in JavaScript: var, let, and const.

// 1. Declaring a variable using 'var' (function-scoped, can be re-declared and updated)
var name = "John";
console.log(name); // Output: John

// 'var' variables can be re-declared and updated within their scope
var name = "Doe"; // Re-declared
name = "Jane"; // Updated
console.log(name); // Output: Jane

// 2. Declaring a variable using 'let' (block-scoped, can be updated but not re-declared in the same scope)
let age = 25;
console.log(age); // Output: 25

// 'let' variables can be updated
age = 30;
console.log(age); // Output: 30

// 'let' cannot be re-declared in the same scope
// let age = 35; // This will cause an error

// 3. Declaring a variable using 'const' (block-scoped, cannot be updated or re-declared)
const PI = 3.1416;
console.log(PI); // Output: 3.1416

// 'const' variables cannot be updated or re-declared
// PI = 3.14; // This will cause an error
// const PI = 3.14; // This will also cause an error

// Variable Scope:
// - Global Scope: Variables declared outside any function are global.
// - Function Scope: Variables declared with 'var' inside a function are accessible only inside that function.
// - Block Scope: Variables declared with 'let' or 'const' inside a block ({}) are accessible only within that block.

function exampleFunction() {
    var functionScoped = "I'm inside a function";
    console.log(functionScoped);
}
// console.log(functionScoped); // This will cause an error because 'functionScoped' is not defined outside the function

if (true) {
    let blockScoped = "I'm inside a block";
    console.log(blockScoped);
}
// console.log(blockScoped); // This will cause an error because 'blockScoped' is not accessible outside the block

// Summary:
// - Use 'var' if you need function-scoped variables (not recommended due to hoisting issues).
// - Use 'let' if you need block-scoped variables that can be updated.
// - Use 'const' if you need block-scoped constants that cannot be changed.
