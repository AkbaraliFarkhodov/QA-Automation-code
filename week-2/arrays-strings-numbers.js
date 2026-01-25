//- An array of **car brands** (at least 5)

let carBrands = ["BMW", "MERC", "TOYOTA", "KIA", "NISSAN"];
console.log(carBrands);

//- An array of **numbers**

let studentGrade = [65, 70, 60, 85, 94];
console.log(studentGrade);

//- A **string** with extra spaces

let age = [12, 23, 65, 87, 26];
console.log(age);

//- A **decimal number**

let studentGPA = [2.1, 2.7, 3.5, 3.7, 2.9];
console.log(studentGPA);

//### Task 1: Accessing & Properties
//Write code to:
//1. Log the **first car brand**

console.log(carBrands.at(0)); // BMW // returns the first index of an array

//2. Log the **last car brand** using a method

console.log(carBrands.at(-1)); // NISSAN // .at(-1) returns the last index's value in an array

//3. Log how many car brands are in the array

console.log(carBrands.length); // 5 // .length returns the number of car brands (indexes) there are in an array

//✍ Explain each output using comments.

//### Task 2: Updating Elements

//1. Change the **second car brand**

//2. Change the **last car brand**
//3. Log the updated array
