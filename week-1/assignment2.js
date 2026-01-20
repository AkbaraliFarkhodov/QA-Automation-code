// Question #1

//"Hello World"; // String - They represent textual data (they are enclosed in single and double quotes)

//42; // Number - Represents numeric values (integers or floating-point). They can be used in arithmetic operations.

//true; // Booleans - Represents a logical value, either True or False

//null; // Null - Represents the Intentional absence of any value. (Indicates no value has been assigned initially but later a value is assigned.

//undefined(1, 2, 3); // Undefined - indicates a variable has been declared but not not assigned a value // Arrays - Represents an ordered collection values (elements,), which can be of any data type.

//{
//name: "Alex",
//age, // Objects - Represents a collection of key-value pairs used to store related data and functionality.
//20;
//}

//Question #2

// 1. A string for your favorite movie

let favoriteMovie = "Quite Place";

console.log(favoriteMovie);

// 2. A number for your age

let myAge = 26;

console.log(myAge);

// 3. A boolean for whether you like JavaScript

let isJsGood = true;

console.log("Do I like JavaScript?", isJsGood);

// 4. A variable with undefined value

let hwCompletion;

console.log("is the homework complete?", hwCompletion);

// after teacher checks if the students did the homework

hwCompletion = "yes";

console.log("is the homework complete?", hwCompletion);

// 5. A variable with null value

// game did not start yet (RM vs BC)

let currentScore = null;

console.log("whats the score ?", currentScore);

// game finished

currentScore = [10, 0];

console.log("whats the score ?", currentScore);

// 3. QUESTION #3

// 1. Which of the following are primitive and which are non-primitive?
let a = "JS"; // Primitive
let b = [10, 20]; // NON Primitive
let c = 100; // Primitive
let d = { city: "Paris" }; // NON Primitive

// 2. Explain in 1–2 sentences why arrays and objects are called non-primitive.

// Arrays and Objects are non primitive mutable data types because they can hold multiple values and complex structures.

// QUESTION #4

//1. what is the value of x ?

let x = "Hello";
let y = x;
y = "hi";

// the value of X is "Hello"

//2. Is this an example of primitive or non-primitive behavior? Why?

// this is an example of Primitive becaue "hello" and "hi" is an example of a string data type and strings are primitive.

// QUESTION #5

//Create 3 different arrays that contains 5 elements each.

const wonUCL = [2024, 2022, 2018, 2017, 2016];

console.log("Last 5 UCLs won by Real Madrid in year order:", wonUCL);

const gamesWon = ["Levante, Real Betis, Sevilla, Alaves, Atlethic Club"];

console.log("Last 5 teams Real Madrid won agaisnt in LaLiga", gamesWon);

const studentAttendance = [true, false, true, false, true];

console.log("is alex present?", studentAttendance[0]);
console.log("is John here?", studentAttendance[1]);

// QUESTION #6

//Create 3 different objects representing something real (example: phone, car, book, student, game etc).

const soccerTeam = {
  name: "Real Madrid",
  country: "Spain",
  age: 120,
  isRich: true,
  trophies: ["15 UCL, 36 LaLiga, 20 CDR, 13 Super Copa, 6 UEFA"],
};
console.log(soccerTeam);
console.log(soccerTeam.name);
console.log(soccerTeam.age);

const favoriteCar = {
  make: "BMW",
  model: "M5 COMP",
  year: 2025,
  isfast: true,
  colors: [
    "Alpine White, Black Sapphire Metallic, Fire Red metallic, Brooklyn Grey, Frozen Deep Grey",
  ],
};
console.log(favoriteCar);
console.log(favoriteCar.make);
console.log(favoriteCar.model);

const birthCountry = {
  name: "uzbekistan",
  city: "samarkand",
  population: 36000000,
  isCentralAsian: true,
  naturalResources: "Gold, Natural Gas, Uranium, Oil, Cotton",
};
console.log(birthCountry);
console.log(birthCountry.name);
console.log(birthCountry.naturalResources);

//QUESTION #7 (CONTROL FLOWS)
// IF
let currentTemperature = 1;
if (currentTemperature > 0) {
  console.log("how cold is it today? in celcius");
}
console.log(currentTemperature);

//QUESTION #8
// If Else

let isTvOn = true;

if (isTvOn) {
  console.log("TV is on and playing music");
} else {
  console.log("Plug in the TV and put on the music");
}

isTvOn = false;
if (isTvOn) {
  console.log("TV is on and playing music");
} else {
  console.log("Plug in the TV and put on the music");
}
//QUESTION #9
// Else If
let studentScore = 65;

if (studentScore > 90) {
  console.log("Grade A");
} else if (studentScore >= 80) {
  console.log("Grade B");
} else {
  console.log("Grade F");
}

//QUESTION #10

let soda = "Pepsi";

switch (soda) {
  case "coke":
    console.log("I got you a coke");
    break;
  case "Fanta":
    console.log("I got you a Fanta");
    break;
  case "Sprite":
    console.log("I got you a Sprite");
    break;
  default:
    console.log("What kind of sode did you get me today?");
    console.log("I got Pepsi for you");
}
