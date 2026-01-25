// String - A string is a sequence of characters wrapped in:

// 1. .length - the .length property tells you how many characters (including spaces)

let text = "Real Madrid will always be better than Barca";

console.log(text.length); // 44 words

// 2. Accessing Characters

// You can access specific chaaracters by their index (starting from 0)

let car = "Mazda";

console.log(car[2]); // Z
console.log(car[4]); // A

// 3.  .toUpperCase() - These methods change the letter case of a string

let soccerTeam = "Real Madrid";

console.log(soccerTeam.toUpperCase()); // REAL MADRID

// 3. .toLowerCase() - these meathods change the letter case of a string

let barcelona = "CRAP";

console.log(barcelona.toLowerCase()); // crap

// 4. .trim() - this method removes extra spaces form the start and end of a string

let garbage = "           Clean Up.            ";
console.log(garbage.trim()); // "Clean up"

// 5. .slice() - Extracts part of a string between two indexes (end is not included)

let slice = "HelloWorld";

console.log(slice.slice(1, 3)); // el
console.log(slice.slice(5)); // world

// 6. .replace() - Replaces the first match of search value with new value

let theWord = "Real Madrid is the best";

console.log(theWord.replace("the best", "superior")); // Real madrid is superior

// 7. .includes() - checks if a string contains a specific substring. also works with an array

let weather = "It will snow tomorrow";

console.log(weather.includes("will")); // true

// 8. .split  - a string into an array using the seperator you provide ->

let vegetables = "tomato, potato, onion, cabage";

console.log(vegetables);
console.log(vegetables.split(",")); // [ 'tomato', ' potato', ' onion', ' cabage' ]
console.log(vegetables.split("")); // 't', 'o', 'm', 'a', 't', 'o',
console.log(vegetables.split(" ")); // [ 'tomato,', 'potato,', 'onion,', 'cabage' ]

// 9. .concat() - two or more strings together

let variable = "What's";
let variable2 = "up";

console.log(variable.concat(" ", variable2)); // What's up
console.log(variable.concat("", variable2)); // what'sup

// 10. .indexOf() - Returns the position (index) of the first occurence of a substing

let whatever = "John Wick is the best";

console.log(whatever.indexOf("is")); // 10
console.log(whatever.indexOf("the")); // 13

// .startsWith() & endsWith() checks wether a string starts or ends with a certain substring

let aircraft = "B2 Stealth Bomber";

console.log(aircraft.startsWith("B2")); // true
console.log(aircraft.endsWith("stealth")); //
