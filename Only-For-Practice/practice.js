// // primitive data types

// // 1. String

// let user = "Ali";
// console.log(user);

// // 2. number

// let userID = 6977;
// console.log(userID);

// // 3. boolean

// let isPractice = true;
// console.log(isPractice);

// // 4. null

// let userAdmin = null;
// userAdmin = "Ali";
// console.log(userAdmin);

// // 5. undefined

// let users = undefined;
// users = "Ali";
// console.log(users);

// //NON - PRIMITIVE DATA

// // 6. ARRAY

// let pastScores = [2, 5, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4];
// console.log(pastScores);

// // 6. OBJECT

// let student = {
//   name: "aliya",
//   age: 1,
//   from: "Queens",
//   likesMilk: true,
// };
// console.log(typeof student);

// // DIFFERENCE BETWEEN MUTABLE AND IMMUTABLE

// // MUTABLE DATA (NON PRIMITIVE) - Mutable means the value can be changed after it is created.

// let student2 = {
//   name: "aliya",
//   age: 1,
//   from: "Queens",
//   likesMilk: true,
// };

// student.name = "ali";

// console.log(student);

// //IMMUTABLE DATA (PRIMITIVE) - Immutable means the value cannot be changed once created.
// // If you “change” it, JavaScript actually creates a new value.

// let student3 = "John";

// student3 = "aliya"; //changes value (immutable)
// console.log(student3);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // CONTROL FLOW

// // IF - Executes a block of code if the condition is true

// let roll = 5;

// if (roll === 5) {
//   console.log("You did it");
// }
// // roll is equal to 5, if roll is equal to 5 then print "you did it"

// // IF ELSE

// let aka = "Akbar";

// if (aka === "Akbar") {
//   console.log("akbar aka");
// } else {
//   console.log("I said say it");
// }

// // aka is equal to "Akbar", if aka is euqal to "akbar" then print "akbar aka" or else print "I said say it"

// // ELSE IF

// let uka = "Ali";

// if (uka === "alijon") {
//   console.log("Aliaskar");
// } else if (uka === "akbar") {
//   console.log("akasi");
// } else if (uka === "ila") {
//   console.log("name spelled wrong");
// } else {
//   console.log("this is weird");
// }

// // uka is equal to "Akbar", if aka is equal to "alijon" then print "Aliaskar", or if uka = "akbar" then print "akasi",
// // or if uka is equal to "ila" then print "name spelled wrong", if non is true then just print "this is weird"

// let soda = 23;

// switch (soda) {
//   case 20:
//     console.log("I got you a coke");
//     break;
//   case 24:
//     console.log("I got you a Fanta");
//     break;
//   case 21:
//     console.log("I got you a Sprite");
//     break;
//   default:
//     console.log("What kind of sode did you get me today?");
// }

// let scores = 55;

//1. What will this log?

// let x = "5";
// let y = 5;
// console.log(x == y);
// console.log(x === y);

let x = "5";
let y = 5;

console.log(x == y);
console.log(x === y);

//2. Write a function that:

// takes two numbers

// returns the larger one

function numbers(num, num2) {
  if (num > num2) {
    return num;
  } else {
    return b;
  }
}
console.log(numbers(3, 1));

// 3. What is the output?

// console.log(Boolean(""));
// console.log(Boolean("0"));

console.log(Boolean(""));
console.log(Boolean("0"));

// 3.  Convert "42.7" into:

// an integer

// a decimal number

let num = 42.7;
console.log(num.parseInt);

let intValue = parseInt(num);
console.log(intValue);

// // Level 2: Control Flow + Loops

// Write a for loop that prints only even numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//7.
let age = 17;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message);

// Write a function that:

// takes a string

// returns "Empty" if the string is empty

// otherwise returns "Not empty"

// (use ternary)
let str = "";
function isEmptry(str) {
  let message = str === "" ? "Empty" : "Not empty";
  return message;
}
console.log(isEmptry(str));

// 8.
// create a new array with numbers greater than 10

const nums = [3, 7, 10, 15, 20];
const newArr = nums.filter((num) => num > 10);
console.log("filter:", newArr);

//9.
const fruits = ["apple", "banana", "orange"];

const capital = fruits.map((num) => num.toUpperCase());
console.log(capital);

const names = ["ali", "abu", "aka"];
const upper = names.map((str) => str.toUpperCase());
console.log(upper);

const name2 = ["ALI", "ABU", "AKA"];
const lower = name2.map((str) => str.toLowerCase());
console.log(upper);

//10.
// Chain methods to:

// keep even numbers

// square them

// check if all results are > 10

const number = [10, 12, 43, 12, 65, 23, 54, 32, 1, 32, 43, 12, 324, 54];

const result = number
  .filter((num) => num % 2 === 0)
  .map((num) => num * num)
  .every((num) => num > 10);
console.log(result);

// 15.
// const user = {
//   name: "Ali",
//   age: 22
// };
// add a role property

// update age

// delete name

const user = {
  name: "Ali",
  age: 22,
};

user.role = "QA";
console.log(user);

user.age = 26;
console.log(user);

delete user.name;
console.log(user);

// 17. Write a loop that prints both key and value of an object.

for (let key in user) {
  console.log(key + ":" + user[key]);
}

// 🧺 Level 6: Sets & Maps

// Remove duplicates from:

// [1, 2, 2, 3, 4, 4, 5]

// (using a Set)

let number1 = [1, 2, 2, 3, 4, 4, 5];
const removedDup = new Set(number1);
console.log(removedDup);

// 19. Create a Map that stores:

// "username" → "admin"

// "loggedIn" → true

// Then retrieve "username".

const maps = new Map([
  ["username", "admin"],
  ["age", 30],
]);

console.log(maps);

console.log(maps.get("username"));

// MORE PROBLEMS

// PART 1: ARRAY CREATION
// 📦 Task 1: Array Setup

// Create one array that represents a collection of something.
// (Examples: scores, prices, names, temperatures, ages, items in a cart, etc.)

// Your array must include:

// At least 6 elements

// At least one number greater than 20

// At least one duplicate value

let prices = [2, 4, 8, 2, 3, 76, 23, 67];

// PART 2: ARRAY TRANSFORMATION
// 🔄 Task 2: Filter Values

// Create a new array that:

// Keeps only values that meet a condition of your choice

// Does not modify the original array

// Stores the result in a new variable

const filteredArr = prices.filter((num) => num > 5);
console.log(filteredArr);
console.log(prices);

// Task 3: Map Values

// Create another new array that:

// Transforms every value from the filtered array

// Uses a mathematical operation

// Stores the transformed result

//----------------------------------------------------------------------------

// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log(`draw`);
//     },
//   };
// }

// const circle = createCircle(1);

// circle.draw();

// // Constructor Function

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log(`draw`);
//   };
// }

// const another = new Circle(1);

// another.Circle();

console.log("Start");

setTimeout(() => {
  console.log("Done");
}, 3000);

console.log("End");

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

getData().then((data) => {
  console.log(data);
});
