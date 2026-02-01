let carBrandArray = ["MERC", "BMW", "TOYOTA", "MAZDA", "PORCHE"];

let examScoresArray = [55, 67, 98, 74, 82];

let carReliablitiy =
  "    Toyota is the most reliable car brand in the world   ";

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
console.log(string(carReliablitiy));

function firstAndLastChar(str) {
  const cleaned = str.trim();

  return {
    first: cleaned[0],
    second: cleaned.at(-1),
  };
}

console.log(firstAndLastChar(carReliablitiy));

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

function task4(arr, arr2) {
  if (arr.includes(arr2.toLowerCase())) {
    return "Brand exists";
  } else {
    return "Brand not found";
  }
}
console.log(task4(carBrandArray, "AUDI"));

//  Task 5: Get Last Brand

// Write a function that:

// 1. Takes an array of car brands
// 2. Returns the **last brand** using an array method

function task5(arr) {
  let lastBrand = arr.at(-1);
  return lastBrand;
}
console.log(task5(carBrandArray));

// Task 6: Format Brands List

// Write a function that:

// 1. Takes an array of car brands
// 2. Returns a **single string** of brands separated by commas

function task6(arr) {
  let brandArray = arr.join(", ");
  return brandArray;
}
console.log(task6(carBrandArray));

// Task 7: Safe Rounding

// Write a function that:

// 1. Takes a number
// 2. If the value is not a number → return `"Invalid number"`
// 3. Otherwise:
//     - Round it normally
//     - Return the result

function task7(num) {
  if (isNaN(num)) {
    return "Invalid number";
  }
  return Math.round(num);
}

console.log(task7(GPA));

//Task 8: Price Comparison

//Write a function that:

//1. Takes two prices
//2. Returns:
//   - `"Prices are equal"`
//   - `"First is higher"`
//   - `"Second is higher"`

function priceComparison(price1, price2) {
  if (price1 === price2) {
    return "Prices are equal";
  } else if (price1 > price2) {
    return "First is Higher";
  } else {
    return "Second is higher";
  }
}
console.log(priceComparison(30, 21));

//### Random Whole Number

//Write a function that:

//1. Returns a random **whole number between 1 and 10**
//2. Explain the formula in comments

function randomNum() {
  let range = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  return range;
}
console.log(randomNum());

// Write a function that:

// 1. Takes:
//     - car price
//     - user budget
// 2. Returns:
//     - `"Within budget"`
//     - `"Over budget"`
//     - `"Invalid input"`

//

function budgetcheck(price, budget) {
  if (isNaN(price) || isNaN(budget) || price < 0 || budget < 0) {
    return "Invalid input";
  }

  if (price <= budget) {
    return "within budget";
  } else {
    return "over budget";
  }
}
console.log(budgetcheck(7000, 4000));

// ### ask 11: Simple Car Deal Summary

// Write a function that:

// 1. Takes:
//     - car brand
//     - car price
//     - user budget
// 2. Cleans the brand name
// 3. Rounds the price
// 4. Checks if the car is affordable
// 5. Returns a sentence using **template literals**

// 📌 Sentence example (do not copy):

function carDealSummary(brand, price, budget) {
  const cleanBrand = brand.trim();
  const roundedPrice = Math.round(price);

  const budgetResult = budgetCheck(roundedPrice, budget);

  if (budgetResult === "Invalid input") {
    return "Invalid input";
  }

  return `${cleanBrand} costs ${roundedPrice} and is ${budgetResult.toLowerCase()}.`;
}

console.log(carDealSummary("Toyota", 32000, 40000));
