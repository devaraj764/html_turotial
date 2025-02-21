// DOM Manipulations
// The Document Object Model (DOM) allows JavaScript to interact with HTML and CSS.

// Selecting Elements
let heading = document.getElementById("main-heading"); // Select by ID
let paragraphs = document.getElementsByClassName("text"); // Select by class name
let divs = document.getElementsByTagName("div"); // Select by tag name
let firstParagraph = document.querySelector(".text"); // Select first matching element
let allParagraphs = document.querySelectorAll(".text"); // Select all matching elements

// Modifying Elements
heading.textContent = "<i>Updated Heading</i>"; // Change text content
heading.innerHTML = "<i>Updated with HTML</i>"; // Change inner HTML
// heading.style.color = "blue"; // Change CSS style
heading.classList.add("highlight"); // Add class
heading.classList.remove("highlight"); // Remove class
heading.setAttribute("data-info", "custom attribute"); // Set attribute
console.log(heading.getAttribute("data-info")); // Get attribute value
console.log(heading.getAttribute("data-name"))

// Creating and Appending Elements
let newParagraph = document.createElement("p"); // Create a new element
newParagraph.textContent = "This is a new paragraph.";
document.body.appendChild(newParagraph); // Append to body

// Removing Elements
let removeElement = document.getElementById("remove-this");
if (removeElement) {
    removeElement.remove(); // Remove element
}

// Event Listeners
let button = document.getElementById("click-button");
button.addEventListener("click", function() {
    alert("Button clicked!");
});

// Changing Classes on Event
button.addEventListener("mouseover", function() {
    button.classList.add("hovered");
});
button.addEventListener("mouseout", function() {
    button.classList.remove("hovered");
});

// Handling Form Inputs
let inputField = document.getElementById("input-field");
inputField.addEventListener("input", function() {
    console.log("Input changed: ", inputField.value);
});

// // Traversing the DOM
let parent = document.getElementById("parent");
console.log(parent.children); // Get all child elements
console.log(parent.firstElementChild); // First child element
console.log(parent.lastElementChild); // Last child element
console.log(parent.nextElementSibling); // Next sibling element
console.log(parent.previousElementSibling); // Previous sibling element

// Example: Creating a Dynamic List
let list = document.getElementById("dynamic-list");
let addButton = document.getElementById("add-item");
addButton.addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "New List Item";
    list.appendChild(newItem);
});
