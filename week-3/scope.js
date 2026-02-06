// 1. Global Scope

// let globalVar = "I am Global";
// console.log(globalVar);

// function printSomething() {
//   if (14 > 2) {
//     console.log(globalVar);
//   }
//   console.log(globalVar);
// }

// printSomething();

// 2. Frunction Scope

// function greet() {
//   let message = `Hello from inside the function ${age}`;
//   const age = 50;
//   console.log(message);

//   if (14 > 5) {
//     const myDogName = "Riki";
//     console.log(message);
//   }
//   console.log(myDogName);
// }

// greet();

// 3. Block Scope

if (14 > 5) {
  const myDogName = "Riki";
  console.log(myDogName);
}

//console.log(myDogName); WRONG
