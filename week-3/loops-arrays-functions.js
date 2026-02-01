// ## PART 1: `for` LOOP (Index Practice)

// ### 🔁 Task 1: Print All Elements

// **Use a `for` loop**

// Write a function that:

// 1. Takes an array
// 2. Prints each element

const num = [12, 23, 12, 43, 532, 4];

function loops(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("Score:", arr[i]);
  }
}

loops(num);

// ### Task 2: Index + Value

// **Use a `for` loop**

// Write a function that:

// 1. Takes an array
// 2. Prints both the **index** and **value** of each element

function loop2(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, value: ${arr[i]}`);
  }
}
loop2(num);

// ### Task 3: First and Last

// **Use a `for` loop**

// Write a function that:

// 1. Takes an array
// 2. Prints:
//     - The first element
//     - The last element (using `array[array.length - 1]`) →
//     We did not cover this last class specifically but it
//     should make sense to you what it is doing.
//     Please bring it up in class if you don’t understand it.
//     `Do not use .at(-1).`

// function loop3(arr) {
//     for (let i)
// }

function firstAndLast(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      console.log("First element:", arr[i]);
    }

    if (i === arr.length - 1) {
      console.log("Last element:", arr[i]);
    }
  }
}
firstAndLast(num);

// ## PART 2: `while` LOOP (Strings)

// ### 🔄 Task 4: Loop Through a String

// **Use a `while` loop**

// Write a function that:

// 1. Takes a **string**
// 2. Uses a `while` loop
// 3. Prints **each character** one by one

const string = "HALA MADRID";
let i = 0;

function loop4(str, i) {
  while (i < str.length) {
    console.log("Character: ", str[i]);
    i++;
  }
}
loop4(string, i);

// ## `for` LOOP + CONTROL FLOW

// ### 🛑 Task 5: Stop When Found

// **Use a `for` loop**

// Write a function that:

// 1. Takes an array and a value to search for
// 2. Loops through the array using a `for` loop
// 3. Stops the loop when the value is found

const studentScore = [85, 70, 65, 90, 95];

function loop5(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      console.log("Exam Score: ", arr[i]);
      break;
    }
  }
}

loop5(studentScore, 65);

// ## PART 4: `for...of` LOOP (Value Access)

// ### 🔂 Task 6: Print Values

// **Use a `for...of` loop**

// Write a function that:

// 1. Takes an array
// 2. Prints each value

let array2 = ["apple", "kiwi", "melon", "water melon", "peach"];

function loop6(arr) {
  for (const fruit of arr) {
    console.log("Fruits:", fruit);
  }
}
loop6(array2);

// ### ⏭ Task 7: Skip a Value

// **Use a `for...of` loop**

// Write a function that:

// 1. Takes an array and a value to skip
// 2. Prints all values except the skipped one

function loop6(arr) {
  for (const fruit of arr) {
    if (fruit === "kiwi") continue;
    console.log("Fruits:", fruit);
  }
}
loop6(array2);

// ## PART 5: APPLYING LOGIC

// ### 🔄 Task 8: Uppercase Strings

// **Use both `for` and `for...of` loops. Write two separate functions for different loop types.**

// Write a function that:

// 1. Takes an array of strings
// 2. Returns a **new array** with all strings converted to **uppercase**

// 📌 Do NOT modify the original array

function loop8(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("Fruit:", arr[i].toUpperCase());
  }
}
loop8(array2);

function loops(arr) {
  for (const fruit of arr) {
    console.log("Fruit:", fruit.toUpperCase());
  }
}

loops(array2);
