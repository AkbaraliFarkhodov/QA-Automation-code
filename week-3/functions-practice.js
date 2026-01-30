let carBrandArray = ["MERC", "BMW", "TOYOTA", "MAZDA", "PORCHE"];

let examScoresArray = [55, 67, 98, 74, 82];

let carReliablitiy =
  "    Toyota is the most reliable car brand in the world.   ";

let GPA = 3.5;

// Task 1: Clean & Format Text

// Write a function that:

// 1. Takes a string
// 2. Removes extra spaces at the start and end
// 3. Converts the string to lowercase
// 4. Returns the cleaned string

function carBrand(str) {
  const noSpaceStr = str.trim();
  const lowerCaseStr = noSpaceStr.toLowerCase();
  return lowerCaseStr;
}

console.log(carBrand(carReliablitiy));

// ### First & Last Character

// Write a function that:

// 1. Takes a string
// 2. Returns:
//     - The first character
//     - The last character

// 📌 Must handle strings with spaces.

function string(str) {
  let trim = str.trim();
  let first = trim[0];
  let last = trim[trim.length - 1];
  return { first, last };
}
console.log(string());

// ### Task 3: Word Counter

// Write a function that:

// 1. Takes a sentence
// 2. Splits it into words
// 3. Returns the number of words

// 📌 Use string and array methods only.

function string2(sentence) {
  let trim = sentence.trim();
  let split = trim.split(" ");
  let length = split.length;
  return { split, length };
}
console.log(string2(carReliablitiy));

// Task 4: Brand Checker

// Write a function that:

// 1. Takes an array of car brands
// 2. Takes a brand name
// 3. Returns:
//     - `"Brand exists"` if found
//     - `"Brand not found"` otherwise

// 📌 Case-insensitive comparison required.

function task4() {
  let cars = carBrandArray.includes("TOYOTA");
  if (cars) {
    return "Brand exists";
  } else {
    return "Brand not found";
  }
}
console.log(task4());

//  Task 5: Get Last Brand

// Write a function that:

// 1. Takes an array of car brands
// 2. Returns the **last brand** using an array method

function task5() {
  let lastBrand = carBrandArray.at(-1);
  return lastBrand;
}
console.log(task5());

// Task 6: Format Brands List

// Write a function that:

// 1. Takes an array of car brands
// 2. Returns a **single string** of brands separated by commas

function task6() {
  let brandArray = carBrandArray.join(", ");
  return brandArray;
}
console.log(task6());

// Task 7: Safe Rounding

// Write a function that:

// 1. Takes a number
// 2. If the value is not a number → return `"Invalid number"`
// 3. Otherwise:
//     - Round it normally
//     - Return the result

function task7() {}
