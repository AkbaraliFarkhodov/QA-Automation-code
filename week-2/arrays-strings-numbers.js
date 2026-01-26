//- An array of **car brands** (at least 5)

let carBrands = ["BMW", "MERC", "NISSAN", "TOYOTA", "KIA", "NISSAN"];
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

carBrands[1] = "Rolls Royce"; // 'BMW', 'Rolls Royce', 'TOYOTA', 'KIA', 'Tesla'

//2. Change the **last car brand**

carBrands[4] = "Tesla"; // 'BMW', 'Rolls Royce', 'TOYOTA', 'KIA', 'Tesla'

//3. Log the updated array

console.log(carBrands);

//### Task 3: Mutator Methods

// 1. Add a new car brand to the **end**

carBrands.push("HONDA");
console.log(carBrands);

// 2. Remove the **last** car brand

carBrands.pop();
console.log(carBrands);

// 3. Add a new car brand to the **beginning**

carBrands.unshift("ALFA ROMEO");
console.log(carBrands);

// 4. Remove the **first** car brand

carBrands.shift();
console.log(carBrands);

// 5. Reverse the array

carBrands.reverse();
console.log(carBrands);

// 6. Sort the array alphabetically

carBrands.sort();
console.log(carBrands);

//### Task 4: Finder Methods

//1. Check if `"Toyota"` exists in the array

console.log(carBrands.includes("TOYOTA")); // True // .includes() finds out if a specific value is inside the array using boolean variables

//2. Find the index of `"BMW"`

console.log(carBrands.indexOf("BMW")); // 0 // indexOf returns the index of a value

//3. Find the last index of a car brand that appears more than once

console.log(carBrands.lastIndexOf("NISSAN")); // 2

//✍ Add comments explaining the results.

//### ask 5: Joiners

//1. Convert the car brands array into a **single string**

console.log(carBrands.join(", ")); // BMW, NISSAN, NISSAN, Rolls Royce, TOYOTA, Tesla

//2. Check if the car brands variable is an array

console.log(Array.isArray(carBrands)); // true

//3. Convert the word `"ENGINE"` into an array of characters

console.log(Array.from("ENGINE")); // [ 'E', 'N', 'G', 'I', 'N', 'E' ]

//## PART 2: STRING MANIPULATION

//### ✍ Task 6: Clean a String

//1. Remove extra spaces from the string

let school = "    Emma Lazarus High School.  ";
console.log(school.trim()); // Emma Lazarus High School.

//2. Log the cleaned string

console.log(school.trim()); // Emma Lazarus High School.

//3. Log its length

console.log(school.length); // 31

//### Task 7: Case & Access

//1. Convert the string to **uppercase**

console.log(school.toUpperCase()); // EMMA LAZARUS HIGH SCHOOL.

//2. Convert it to **lowercase**

let highSchool = "NEW TOWN HIGH SCHOOL";
console.log(highSchool.toLowerCase()); // new town high school

//3. Log the **first** character

console.log(highSchool.at(0)); // N

//4. Log the **last** character

console.log(highSchool.at(-1)); // L

//### Task 8: Slice & Replace

//1. Extract the **first word**

console.log(highSchool.slice(0, 3)); // NEW

//2. Extract the **last word**

console.log(highSchool.slice(14)); // SCHOOL

//3. Replace one word with another

console.log(highSchool.replace("TOWN", "LAZARUS")); // NEW LAZARUS HIGH SCHOOL

//### Task 9: Search Methods

//1. Check if the string includes `"car"`

console.log(highSchool.includes("car")); // false

//2. Find the position of a word

let javaScript = "I love coding";
console.log(javaScript.indexOf("love")); // 2

//3. Check if the string starts with a specific word

console.log(javaScript.startsWith("I")); // true

//4. Check if the string ends with a specific word

console.log(javaScript.endsWith("coding")); // true

//### Task 10: Split & Concat

//1. Split the sentence into words

let sentence = "Amazing";
console.log(sentence.)

//2. Join two strings using a method (not `+`)
