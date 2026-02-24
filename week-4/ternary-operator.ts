//
let age = 15;
let message = age >= 18 ? "You are an adult" : "You are a minor";

age = 20;
console.log(message);

// example with if else

let ageTwo = 26;

if (ageTwo >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

function checkEvenOdd(num) {
  return num % 2 === 0 ? "even" : "odd";
}

console.log(checkEvenOdd(2));
console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(12));

// can you comfirm if my understaning is cprrect about .this
// “How do you usually decide between using a for loop, a while loop, or a for...of loop in real-world code?”
