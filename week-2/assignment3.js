//## Part 1: Arithmetic Operators

//1. Create two numbers and:
//- Add them
//- Subtract them
//- Multiply them
// - Divide them

// Print each result.

let number = 50;
let number1 = 10;

console.log(number + number1); //adding
console.log(number - number1); //subtracting
console.log(number * number1); //multiplying
console.log(number / number1); //dividing

//2. Create a number and:
//- Increase it by 1 using an operator
//- Decrease it by 1 using an operator

//    Print the value after each change.

let n1 = 10;
n1++;
console.log(n1);

n1--;
console.log(n1);

//3. Create two numbers and print:
//- The remainder when the first is divided by the second

let n2 = 25;
let n3 = 3;
console.log(n2 % n3);

//4. Create a number and raise it to the power of 3.

let n4 = 9;
console.log(n4 ** 3);

//## Part 2: Comparison Operators

//1. Create two variables:
// - One number
// - One string with a number inside

//   Compare them using `===` and print the result.

let n5 = 10;
let n6 = "ten";

console.log(n5 === n6);

//2. Create two different numbers and:
//- Check if the first is greater than the second

let n7 = 12;
let n8 = 10;

console.log(n7 > n8);

//- Check if the first is less than the second

console.log(n7 < n8);

//3. Create two values and check if they are **not equal** using `!==`.

let n9 = 10;
let n10 = 2399;

console.log(n9 !== n10);

//## Part 3: Logical Operators

//1. Create two comparison expressions and combine them using `&&`.

//Print the result.

if (22 > 15 && 14 < 20) {
  console.log("This is easy");
}

//2. Create two comparison expressions and combine them using `||`.

//Print the result.

if (21 > 20 || 2 > 10) {
  console.log("Hi again");
}

//3. Create a boolean variable and:
//- Reverse its value using `!`
//- Print the result

let isHeRich = true;

console.log(!isHeRich);

console.log(!(2 > 20));

//## Part 4: Truthy vs Falsy

//1. Create a variable with a value that is **falsy**.
//- Use it in an `if` statement
//- Print `"Falsy value detected"` if it runs

if (false) {
  console.log("Falsy value detected");
}

if (0) {
  console.log("Falsy value detected");
}

if ("") {
  console.log("Falsy value detected"); ///////.  NON OF THESE WILL PRINT BECAUSE THEY ARE FALSY
}

if (null) {
  console.log("Falsy value detected");
}

if (undefined) {
  console.log("Falsy value detected");
}

if (NaN) {
  console.log("Falsy value detected");
}

//2. Create a variable with a value that is **truthy**.
//- Use it in an `if` statement
//- Print `"Truthy value detected"` if it runs

if (true) {
  console.log("Truthy value detected");
}

if (1) {
  console.log("Truthy value detected");
}

if ("hello") {
  console.log("Truthy value detected");
}

if ([]) {
  console.log("Truthy value detected"); ////// ALL OF THESE WILL PRINT BECUASE THEY ARE TRUTHY
}

if ({}) {
  console.log("Truthy value detected");
}

if (42) {
  console.log("Truthy value detected");
}

if ("0") {
  console.log("Truthy value detected");
}

//3. Create a variable and use `||` to give it a **default value**.
//- Print the final value.

let CR7 = "" || 7;
console.log(CR7);

// ## Challenge (Optional ⭐)

//1. Create a variable called `username`.
//- If it exists (truthy), print `"Welcome back"`
//- Otherwise, print `"Please sign up"`
//> Use **logical** operators only.

let username = 1;
if (username < 5 && username > 0) {
  console.log("Welcome Back");
} else {
  console.log("Please Sign Up");
}
