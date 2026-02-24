// ## Task 1: Callback Greeting
// Write a function:
// ```jsx
// prepareGreeting(callback)
// ```
// It should:
// 1. Wait 2 seconds using `setTimeout`
// 2. Then call the callback with the message:

//     ```
//     "Hello, your greeting is ready!"
// //     ```
// // Then:
// // - Call the function
// // - Pass a callback that logs the message

function prepareGreeting(callback) {
  console.log("Preparing...");

  setTimeout(() => {
    callback("Hello, your greeting is ready!");
  }, 2000);
}

function callGreeting(greeting) {
  console.log(greeting);
}

prepareGreeting(callGreeting);

// // # PART 2: PROMISE BASICS
// // ## Task 2: Create a Promise
// // Create a function:
// // ```jsx
// // makePizza()
// // ```
// // It should:
// // 1. Return a new Promise
// // 2. Wait 2 seconds
// // 3. If a variable `pizzaAvailable` is true:
// //     - resolve with `"Pizza is ready"`
// // 4. Otherwise:
// //     - reject with `"No ingredients"`
// // Then:
// // - Call the function
// // - Use `.then()` and `.catch()` to handle the result

function makePizza() {
  return new Promise((resolve, reject) => {
    console.log("Preparing your Pizza...");
    setTimeout(() => {
      const pizzaAvailable = false;
      if (pizzaAvailable) {
        resolve("Pizza is ready");
      } else {
        reject("No ingredients");
      }
    }, 2000);
  });
}

makePizza()
  .then((message) => {
    console.log("Reciever:", message);
  })
  .catch((error) => {
    console.log("Reciever error", error);
  });

// // ## Task 3: Promise with Number Check
// // Create a function:
// // ```jsx
// // checkNumber(num)
// // ```
// // It should:
// // 1. Return a Promise
// // 2. After 1 second:
// //     - Resolve with `"Even number"` if the number is even
// //     - Reject with `"Odd number"` if the number is odd
// // Call the function and handle results using:
// // ```jsx
// // .then()
// // .catch()
// // ```

function checkNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve("Even Number");
      } else {
        reject("Odd number");
      }
    }, 1000);
  });
}

checkNumber(20)
  .then((message) => {
    console.log("number is:", message);
  })
  .catch((error) => {
    console.log("number is:", error);
  });

// //   # 🔹 PART 3: ASYNC/AWAIT

// // ## Task 4: Async Breakfast

// // Create a function:

// // makeCoffee()
// // It should:
// // - Return a Promise
// // - After 2 seconds, resolve with:
// //     "Coffee is ready"
// // Then create an **async function**:
// // "startMorning()"

// // It should:
// // 1. Await `makeCoffee()`
// // 2. Log the result
// // 3. Log:
// //     "Morning started"

function makeCoffee() {
  return new Promise((resolve, reject) => {
    console.log("Preparing coffee...");
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Coffee is ready");
      } else {
        reject("Out of Coffee");
      }
    }, 2000);
  });
}

async function startMorning() {
  try {
    const result = await makeCoffee();
    console.log("Morning started,", result);
  } catch (error) {
    console.log("Oh nooo We're ", error);
  }
}

startMorning();

// # PART 4: TRY…CATCH
// ## Task 5: Async Error Handling
// Create a function:
// "makeSandwich(hasBread)"
// It should:
// - Return a Promise
// - After 1 second:
//     - Resolve `"Sandwich is ready"` if `hasBread` is true
//     - Reject `"No bread available"` if false
// Create an async function:
// "prepareLunch()"
// Inside it:
// 1. Use `try…catch`
// 2. Await `makeSandwich(false)`
// 3. Log the result or error message

function makeSandwich(hasBread) {
  return new Promise((resolve, reject) => {
    console.log("Preparing Sandwich...");
    setTimeout(() => {
      if (hasBread) {
        resolve("Sandwich is ready");
      } else {
        reject("No bread available");
      }
    }, 1000);
  });
}

async function prepareLunch() {
  try {
    const result = await makeSandwich(false);
    console.log("Here you go, ", result);
  } catch (error) {
    console.log("I am sorry, ", error);
  }
}
await prepareLunch();

// # 🔹 PART 5: PROMISE.ALL
// ## Task 6: Parallel Tasks
// Create three functions:
// - `washCar()`
// - `cleanRoom()`
// - `doLaundry()`
// Each:
// - Returns a Promise
// - Resolves after different times:
//     - Car: 2 seconds
//     - Room: 1 second
//     - Laundry: 3 seconds
// - Logs when finished
// Then:
// 1. Create an async function:
//     "startChores()"
// 2. Use `Promise.all()` to run all three tasks at once
// 3. After all finish, log:
//     "All choresdone"

function washCar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Car washed");
      resolve("Car done");
    }, 2000);
  });
}

function cleanRoom() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Room cleaned");
      resolve("Room done");
    }, 1000);
  });
}

function doLaundry() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Laundry done");
      resolve("Laundry done");
    }, 3000);
  });
}

async function startChores() {
  await Promise.all([washCar(), cleanRoom(), doLaundry()]);
  console.log("All chores done");
}

startChores();
