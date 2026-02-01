// 1. Looping over object

const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
  greet: function () {
    console.log("Hello, my name is Alice ");
  },
  bye() {
    console.log("I am Aalice, bye");
  },
};

for (const key in person) {
  console.log(key + ", " + person[key]);
}

// 2. "in" keyword - checks if a key exists

console.log("name" in person);
console.log("weight" in person);

//3. accessing object values

console.log(person.name);
console.log(person.age);

// or

// console.log(person."name");
// console.log(person."age");

// 4. adding and updating properties

console.log(person);

// adding - if key does not exist then it adds it to the object
person.height = 170;
console.log(person);

// updating- if a key exists, then it updates the value of the specific jey inside the object
person.age = 30;
console.log(person);

//5. "delete" keyword - removing properties

delete person.height;
console.log(person);

// 6. object method

person.greet();
person.bye();

// 7. using "this" keyword

const car = {
  brand: "tesla",
  speed: 120,
  info() {
    console.log(`${this.brand} is going at ${this.speed} km/h`);
  },
};

car.brand;
car.speed;

car.info();
