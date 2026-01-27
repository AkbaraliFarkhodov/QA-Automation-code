// FUNCTION - a function is a reusable block of code that performs a specific task
// - Functions help make your code modular, organize

console.log("Hello world");
console.log("Hello world");

function greet() {
  console.log("Hello world");
}

greet();

console.log("Bye Students");

function newGreet(name) {
  console.log(`Hello ${name} welcome to the class`);
}

newGreet("Muhammad");

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

var Hello = "what is this";
console.log(Hello);
