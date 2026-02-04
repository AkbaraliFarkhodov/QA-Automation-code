const numbers = [3, 6, 9, 12, 15];

// map() -> Transforms each element inside an array and then returns a new array

// const tripled1 = numbers.map((num) => num * 3);

const tripled = [];
console.log(tripled);

for (let i = 0; i < numbers.length; i++) {
  tripled.push(numbers[i] * 3);
}
console.log(tripled);

// chaining mthods

// one way to do it

const numbersChain = [10, 13, 18, 20, 25, 32, 50, 72, 96, 102];

const filteredNumbers = numbersChain.filter((num) => num % 2 === 0);
console.log(filteredNumbers);
