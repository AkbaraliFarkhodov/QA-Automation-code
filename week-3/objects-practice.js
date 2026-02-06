// ## PART 1: CREATE AN OBJECT

// ### 🧱 Task 1: Object Creation

// Create **one object** that represents something of your choice. (Examples: car, student, phone, video game, book, movie, etc.)

// Your object must include:

// - At least **4 properties**
// - At least **1 string**
// - At least **1 number**
// - At least **1 nested object**

const car = {
  make: "Toyota",
  year: 2025,
  madeIn: "Japan",
  specs: {
    popularModel: "Sienna",
    isHybrid: true,
  },
};
console.log(car);

// ## PART 2: OBJECT METHODS

// ### ⚙ Task 2: Description Method

// Add a method that:

// 1. Uses `this`
// 2. Returns a sentence describing the object

const car2 = {
  make: "Toyota",
  year: 2025,
  madeIn: "Japan",
  specs: {
    popularModel: "Sienna",
    isHybrid: true,
  },
  description() {
    console.log(`${this.make} is made in ${this.madeIn} in ${this.year}`);
  },
};
car2.description();

car2.text = function () {
  console.log("Hi Akbarali");
};
console.log(car2);
car2.text();

// function usingThis(obj) {
//   return `${this.make} is made in ${this.madeIn} in ${this.year}`;
// }
// console.log(usingThis.call(car2));

// ### Task 3: Update Method

// Add a method that:

// 1. Takes **parameters**
// 2. Updates one property using `this`
// 3. Returns the updated value

const car3 = {
  make: "Toyota",
  year: 2025,
  madeIn: "Japan",
  specs: {
    popularModel: "Sienna",
    isHybrid: true,
  },
  description() {
    console.log(`${this.make} is made in ${this.madeIn} in ${this.year}`);
  },
  updateYear: function (newYear) {
    this.year = newYear;
    return this.year;
  },
};
car3.description();
console.log(car3.updateYear(2026));

// ### Task 4: Calculation Method

// Add a method that:

// 1. Uses `this`
// 2. Performs a calculation
// 3. Returns the result

const car4 = {
  make: "Toyota",
  year: 2025,
  madeIn: "Japan",
  specs: {
    popularModel: "Sienna",
    isHybrid: true,
  },
  description() {
    return `${this.make} is made in ${this.madeIn} in ${this.year}`;
  },
  updateYear: function (newYear) {
    this.year = newYear;
    return this.year;
  },
  calculation: function () {
    const math = 13;
    return this.year * math;
  },
};
car4.description();
console.log(car4.updateYear(2026));
console.log(car4.calculation());

// ## PART 3: OBJECT ACCESS

// ### 🔑 Task 5: Dot vs Bracket

// Access **two properties** using:

// - dot notation
// - bracket notation

console.log(car4.make);
console.log(car4["year"]);

// ### Task 6: Property Checker

// Write a function (outside the object) that:

// 1. Takes an object and a property name
// 2. Uses the `in` operator
// 3. Returns whether the property exists

function propertyChecker(obj) {
  return "make" in obj;
}
console.log(propertyChecker(car4, "madeIn"));

// ## PART 4: OBJECT METHODS PRACTICE

// ### 🔄 Task 7: Method Calls

// 1. Call **each object method**
// 2. Store the returned values
// 3. Print them to the console

const descriptionMethod = car4.description();
const updateMethod = car4.updateYear(2026);
const calculationMethod = car4.calculation();

console.log(descriptionMethod);
console.log(updateMethod);
console.log(calculationMethod);

// ## 🔹 PART 5: PROPERTY MANIPULATION

// ### ✏ Task 8: Add a New Property

// - Add a new property to your object **without using a method**
// - Print the object to see the added property

car4.model = "Camry";
console.log(car4);

// ### Task 9: Update a Property Directly

// - Update an existing property directly (not through a method)
// - Print the updated value

car4.model = "rav4";
console.log(car4.model);

// ### Task 10: Delete a Property

// - Delete one property from your object
// - Print the object to confirm it’s removed

delete car4.model;
console.log(car4);

// ## PART 6: OBJECT UTILITY METHODS

// ### 🛠 Task 11: List Object Keys

// - Use `Object.keys()` to list all property names
// - Print the result
// - Check if a specific property name exists in the returned value from `Object.keys()`.

const objectKey = Object.keys(car4);
console.log(objectKey);
console.log(objectKey.includes("year"));

// ### Task 12: List Object Values

// - Use `Object.values()` to list all property values
// - Print the result
// - Check if a specific property value exists in the returned value from `Object.values()`.

const objectValues = Object.values(car4);
console.log(objectValues);
console.log(objectValues.includes(2026));

// ### Task 13: List Object Entries

// - Use `Object.entries()` to list all key-value pairs
// - Print the result
// - Flatten the array returned from `Object.entries()` .
// - Print the flattened array

const keyValue = Object.entries(car4);
console.log(keyValue);

const flatArray = keyValue.flat();
console.log(flatArray);

// ## PART 7: NESTED OBJECT PRACTICE

// ### 🏗 Task 14: Access Nested Properties

// - Access at least **two properties** from the nested object
// - Use **dot notation**
// - Print both values

console.log(car4.specs.isHybrid);
console.log(car4.specs.popularModel);

// ### 🏗 Task 15: Update Nested Properties

// - Update one property inside the nested object
// - Print the updated nested object

car4.specs.isHybrid = false;
console.log(car4.specs);
