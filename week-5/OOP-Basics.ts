//Example 1

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  greet() {
    console.log(
      `Hi, I'm ${this.name} and I'm ${this.age} years old and I am from ${this.country}`,
    );
  }
}

const alice = new Person("Alice", 25, "Uzbekistan");
alice.greet();

const bob = new Person("Bog", 30, "Tajikistan");
bob.greet();

const soccerPlayer = {
  name: "Cristiano Ronaldo",
  age: 41,
  country: "Portugal",
};

//Example 2

class Phone {
  constructor(brand, model, storage) {
    this.brand = brand;
    this.model = model;
    this.storage = storage;
  }
  describe() {
    console.log(
      `This phone is a ${this.brand} ${this.age} and has a storage of ${this.storage}`,
    );
  }
  greetCustomer() {
    return "Hello customer, this is your new phone. Please Enjoy!!!";
  }
}
const iphone17 = new Phone("Apple", "iphone 17", "512GB");
iphone17.describe();

const samsungA7 = new Phone("Samsung", "A7", "256GB");
samsungA7.greetCustomer();

console.log(`${iphone17.greetCustomer()} ${iphone17.describe}`);
