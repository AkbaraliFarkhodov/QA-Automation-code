// 1. Array is a data type that can store multiple elements.

let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits);

// 2. Accessing Array elements - arrays start from 0

console.log(fruits[0]);
console.log(fruits[4]);

//3 updating array elemnts

fruits[1] = "mango";
console.log(fruits);

// 4. .length - returns how many elements inside an array

console.log(fruits.length);

// methods that return new array

// 5. concat() - merges arrays into one array

const fruitsTwo = ["apple", "banana", "orange"];
const moreFruits = ["cherry", "grape"];
const allFruits = fruitsTwo.concat(moreFruits);

console.log(allFruits);
console.log(fruitsTwo);
console.log(moreFruits);

// 6. .flat() - flattens the arrays

const nestedNumbers = [[1, 2], [3, 4], [5]];
const flatNumbers = nestedNumbers.flat();

console.log(nestedNumbers);
console.log(flatNumbers);

// 7. .slice() - extracts a portion of an array

const numbers = [1, 2, 3, 4, 6, 7, 8];
console.log(numbers);

// slice (1 is index here-included, 4 is also index here - excluded)
const slicedNumbersArray = numbers.slice(1, 4);
console.log(slicedNumbersArray);

const myFavoriteColors = ["green", "yellow", "blue", "red", "white"];
const mySlicedFavoriteColors = myFavoriteColors.slice(1, 4);
console.log(slicedNumbersArray);

// --------- methods that change the ORIGINAL array --------------

// 1. copying an array

const originalFruits = ["kiwi", "banana", "cherry"];
const richardFruits = [...originalFruits];

console.log(originalFruits);
console.log(richardFruits);

// .push() - adds a new element at the end of the array

console.log(originalFruits);
richardFruits.push("coconut");
console.log(richardFruits);

// 3. .pop() - removes last element from the array

console.log(originalFruits);
richardFruits.pop();
console.log(richardFruits);

// 4. .unshift() - add element to the beggining of the array

console.log(originalFruits);
richardFruits.unshift("grapes");
console.log(richardFruits);

// 5. .shift() - removes the first element from an array

console.log(originalFruits);
richardFruits.shift("grapes");
console.log(richardFruits);

//6. .reverse() - reverse an array

console.log(originalFruits);
console.log(richardFruits.reverse());

//7.  .sort() - sorts the array -> commonly used with numbers

const newNumbers = [3, 6, 8, 2, 1, 77, 32, 62];
newNumbers.sort((a, b) => a - b);
console.log(newNumbers);

const stringArrays = ["A", "C", "Z", "B"];
stringArrays.sort();
console.log(stringArrays);

// ------------ methods that find an element in the array ---

// 1. .index() - returns the index of  a specific element inside an array

const akbarAliFavoriteColors = ["black", "white", "red", "blue"];
console.log(akbarAliFavoriteColors.indexOf("red"));

// 2. .lastindexOf() - Returns the last index of a specific elemnt inside an array. alwyas returnns

console.log(akbarAliFavoriteColors.lastIndexOf("red"));

// 3. .at() - gets an element at a specific position

console.log(akbarAliFavoriteColors.at(1));

// 4. .includes() - checks if an elemnt exists inside an array

const trainLanes = ["F", "E", "B", "D", "Z", "J"];

console.log(trainLanes.includes("E"));

// ------------ Joiners and Converters ---

// .join() - converts an array into string
const kaungFruitsArray = ["apple", "banana", "kiwi"];
const kaungFruitsString = kaungFruitsArray.join(); // -> "["apple", "banana", "kiwi"]"

console.log(kaungFruitsString);

// 2. Array.from() - creates a new array from string

const str = "Hello";
const chars = Array.from(str);
console.log(chars);

// 3. array.isarray() - checks if a value is an arrray

const nycNumbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(nycNumbers));
