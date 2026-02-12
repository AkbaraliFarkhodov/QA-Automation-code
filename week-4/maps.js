// Emplty Map

const myMap = new Map();
console.log(myMap);

// Example 1

const myInitialMap = new Map([
  ["name", "Alice"],
  ["age", 30],
]);

console.log(myInitialMap);

// Adding into map

const mySecondMap = new Map();

mySecondMap.set(["name", "Richard"]);
mySecondMap.set(["age", 28]);
mySecondMap.set([]);
