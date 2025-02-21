// Function Expressions
const add = function(x, y) {
    return x + y;
};
console.log(add(3, 4)); // Output: 7

// Arrow Functions
const multiply = (x, y) => x * y;
console.log(multiply(3, 4)); // Output: 12

// Default Parameters
function greetUser(name = "Guest") {
    return "Welcome, " + name;
}
console.log(greetUser()); // Output: Welcome, Guest
console.log(greetUser("Bob")); // Output: Welcome, Bob

// Higher-Order Functions
function operate(x, y, operation) {
    return operation(x, y);
}
console.log(operate(10, 5, add)); // Output: 15
console.log(operate(10, 5, multiply)); // Output: 50