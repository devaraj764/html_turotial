// Arrays
// Arrays store multiple values in a single variable.

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Apple
console.log(fruits.length); // 3
fruits.push("Mango"); // Adds a new element
console.log(fruits);

// Array Methods
// forEach - Iterates through elements
fruits.forEach(fruit => console.log(fruit));

// map - Creates a new array based on existing one
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);

// filter - Returns elements that match a condition
let filteredFruits = fruits.filter(fruit => fruit.toLowerCase().includes("a"));
console.log(filteredFruits);

// reduce - Reduces an array to a single value
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

// find - Returns the first element that matches a condition
let foundFruit = fruits.find(fruit => fruit.length > 5);
console.log(foundFruit);

// includes - Checks if an array contains a value
console.log(fruits.includes("Banana")); // Output: true

// sort - Sorts an array
console.log(fruits.sort());



// Objects
// Objects store data in key-value pairs.

let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name); // John
console.log(person["age"]); // 30
person.country = "USA"; // Adding a new property
console.log(person);
