// 1. String// They represent textual data (they are enclosed in single and double quotes)

let name = "Davit";
let myName = "Akbar"; // single quote but fetting converted to double quotes on save.
let studentName = "Muhammad";

console.log(name);
console.log(myName);
console.log(studentName);

// 2. Number// Represents numeric values (integers or floating-point). They can be used in arithmetic operations.

const birthYear = 1980;
const carModel = 2024;
const studentScore = 90.5;

console.log(birthYear);
console.log(carModel);
console.log(studentScore);

// 3. Boolean// Represents a logical value, either True or False

let isLightOn = false;

console.log("is the light on?", isLightOn);

// later someone comes and turns on the light

isLightOn = true;

console.log("is the light on?", true);

// 4. NULL// Represents the Intentional absence of any value. (Indicates no value has been assigned initially but later a value is assigned)

let seatOwner = null;

console.log("seat status", seatOwner);

// party starts at 5 pm, the seat has an owner.

seatOwner = "Akbarali";
console.log("seat status:", seatOwner);

// 5. UNDEFINED// Indicates a variable has been declared but not not assigned a value

let studentPresent;

console.log("student present?", studentPresent);

//After teacher checks attendance;

studentPresent = "yes";

console.log("student present?", studentPresent);

// 6. ARRAY// (Non-Primitive) Arrays are used to store multiple values in a single variable and allow access by index (starting from 0

// make your variables name descriptive, try to use same data type
const colors = ["red", "blue", "black"];

console.log(colors);

const studentsScore = [70, 80, 95];

console.log(studentsScore);

// NOT RECOMMENDED FOR ARRAYS!!! arrays that have all kind of data types.

const array = ["johnathan", 30, true];

console.log(array);

// 7. OBJECT// (Non-Primitive) Represents a collection of key-value pairs used to store related data and functionality

const person = {
  name: "Alex",
  age: 21,
  isStudent: true,
};
console.log(person);

let soccerPlayer = {
  name: "Ronaldo",
  age: 40,
  isPlayer: true,
  country: {
    countryName: "Saudi Arabia",
    city: "Riyadh",
    zipCode: 11365,
  },
};
console.log(soccerPlayer); //if just with a dot (.) only shows country.
