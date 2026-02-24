// Numbers are data type in JavaScript used for calculations, comparisons, measurements, scores and logic

// 1. Basic Number Operations

console.log(10 + 2); // 12
console.log(21 - 12); // 9
console.log(12 * 3); // 36
console.log(8 / 3); // 2.666666666665
console.log(8 % 3); // 2

// 2. Comparing Numbers

console.log(6 > 3); // true
console.log(6 < 3); // false
console.log(6 === 6); // true
console.log(6 !== 3); //true

// Rounding Numbers

// 3. Math.round() - rounds to the nearest whole number

console.log(Math.round(8.2)); //8
console.log(Math.round(8.6)); //9

// 4. math.floor() - always rounds down

console.log(Math.floor(9.9)); //9
console.log(Math.floor(7.8)); //7

// 5. math.ceil() - Always rounds up

console.log(Math.ceil(7.1)); // 8
console.log(Math.ceil(6.1)); // 7

// 6. math.trunc() - Removes the decimal part

console.log(Math.trunc(23.89)); // 23
console.log(Math.trunc(9.31)); // 9

// Formatting Numbers

// 7. .toFixed() - Formats a number to a fixed number of decimal places. Returns a string, not a number.

let currentPrice = 23.1234;
console.log(currentPrice.toFixed(3)); // 23.123
console.log(currentPrice.toFixed(4)); // 23.1234
console.log(currentPrice.toFixed(2)); // 23.12

// 8. Number() - Converts a value into a number

console.log(Number("90")); // 90
console.log(Number("12")); // 12

console.log(Number("ALI")); // Nan -> not a number

// 9. parselnt() - converts a value into an integer by removing decimals

console.log(parseInt("43.98")); // 43
console.log(parseInt(98.98)); // 98

// 10. parseFloat() - converts a value into a decimal number.

console.log(parseFloat(43.55)); // 43.55
console.log(parseFloat("12.32")); // 12.32

// 11. isNaN() - checks whether a value is Not a Number

console.log(isNaN("hello")); // true
console.log(isNaN(20)); // false
console.log(isNaN("WHAT THE HELL")); //true

// 12. Number.isInteger() - checks whether a value is an integer.

console.log(Number.isInteger(34)); //true
console.log(Number.isInteger(92.453)); // false

// 13. Math.abs() - returns the absolute value of a number

console.log(Math.abs(-34)); //34
console.log(Math.abs(-32)); //32
console.log(Math.abs(23)); // 23

// 14. math.min() - returns the smallest value

console.log(Math.min(3, 7, 1, 1, 6, 2, 4, 2, 4, 65, 7, 8, 3, 2, 1)); // 1
console.log(Math.min(0.4, 0.1, 1, 4, 6)); // 0.1

// 15. math.max() - returns the lasrgest value

console.log(Math.max(1990, 2445, 53, 234, 12, 4, 9875423)); // 9875423

// 16. math.pow() - Raises a number to a power.

console.log(Math.pow(2, 5)); // 32
console.log(Math.pow(43, 12)); // 39959630797262580000

// 17. math.sqrt() - Returns the square root of a number

console.log(Math.sqrt(100)); // 10

// 18. math.random() - generates a random decimal number between 0 (inclusive) and 1 (exclusive)

console.log(Math.random()); // 0.8284240248040644

// FORMULA

// Math.floor(Math.random() * (Max - Min + 1)) + Min;

// Example: Generating a number between 1000 and 200

let random1000to200 = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;

console.log(random1000to200);
