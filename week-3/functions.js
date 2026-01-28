// FUNCTION - a function is a reusable block of code that performs a specific task
// - Functions help make your code modular, organized, and easier to maintain.

// 1. Function Syntax

console.log("Hello world");
console.log("Hello world");

function greet() {
  console.log("Hello world");
}

greet(); // I am calling the funtion

// 2. parameters - Parameters are inputs you provide to a function so it can work with different data

function newGreet(name) {
  console.log(`Hello ${name} welcome to the class`);
}

newGreet("Muhammad");

// 3. Multiple parameters
function add(num1, num2) {
  console.log(num1 + num2);
}

add(5, 2);

function addNewNumber(num1, num2) {
  return num1 + num2;
}
const functionResult = addNewNumber(3, 6);

// 6. Arrow functions

const greetStudentTwo = (student) => {
  console.log(`Hello ${student}, welcome to class`);
};

greetStudentTwo("Davit");
