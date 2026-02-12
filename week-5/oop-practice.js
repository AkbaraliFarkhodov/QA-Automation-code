// ## Task 1: Create a Car Class

// Create a class called `Car` that:

// 1. Has a constructor with:
//     - brand
//     - price
// 2. Includes a **private fuel property**:
//     - `#fuelLevel`
//     - Starts at 100
// 3. Has these methods:
//     - `drive()` → reduces fuel by 10
//     - `refuel()` → sets fuel back to 100
//     - `getInfo()` → returns a sentence about the car

// 📌 Must use `this` inside every method.

// ## Task 2: Methods with Parameters

// Add these methods to the `Car` class:

// 1. `discount(amount)`
//     - Reduces the price by the given amount
// 2. `isExpensive(limit)`
//     - Returns:
//         - `"Expensive"` if price is above the limit
//         - `"Affordable"` otherwise

// # PART 2: ENCAPSULATION (GETTERS & SETTERS)

// ## 🔐 Task 3: Controlled Price Access

// Inside the `Car` class:

// 1. Create a **getter** called `priceTag`
//     - Returns the price with a dollar sign

//         Example: `$25000`

// 2. Create a **setter** called `updatePrice`
//     - Accepts a new price
//     - If the price is negative:
//         - Set price to 0
//     - Otherwise:
//         - Update normally

// 📌 Use the both methods we learned in class

// `get` and `set` (1st method) we learned falls into encapsulation part also.

// # PART 3: ABSTRACTION WITH PRIVATE METHODS

// ## 🧠 Task 4: Hidden Engine Logic

// Modify the `Car` class so that:

// 1. Create a private method:
//     - `#consumeFuel()`
// 2. This method:
//     - Reduces fuel by 10
// 3. The `drive()` method:
//     - Must call `#consumeFuel()`
//     - Must NOT change fuel directly

// 📌 The user should only call `drive()`.

// # PART 4: STATIC PROPERTIES & METHODS

// ## ⚡ Task 5: Car Counter

// Add to the `Car` class:

// 1. A static property:
//     - `totalCars` (starts at 0)
// 2. Each time a new car is created:
//     - Increase the counter
// 3. A static method:
//     - `showTotalCars()`
//     - Returns the number of cars created

class Car {
  static totalCars = 0;
  #fuelLevel;
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
    this.#fuelLevel = 100;
    Car.totalCars++;
  }
  drive() {
    this.#consumeFuel();
  }
  refuel() {
    this.#fuelLevel = 100;
  }
  getInfo() {
    return `my ${this.brand} costs ${this.price} and currently the fuel level is ${this.#fuelLevel}`;
  }
  discount(amount) {
    this.price = this.price - amount;
  }
  isExpensive(limit) {
    return this.price > limit ? "Expensive" : "Affordable";
  }
  get priceTag() {
    return `$${this.price}`;
  }
  set updatePrice(newPrice) {
    if (newPrice < 0) {
      this.price = 0;
    } else {
      this.price = newPrice;
    }
  }
  #consumeFuel() {
    this.#fuelLevel = this.#fuelLevel - 10;
  }
  static showTotalCars() {
    return `Total cars created: ${Car.totalCars}`;
  }
}

const car1 = new Car("Toyota", 30000);
const car2 = new Car("BMW", 50000);
const car3 = new Car("Honda", 25000);

console.log(Car.totalCars);

// # PART 5: INHERITANCE

// ## 🧬 Task 6: ElectricCar Class

// Create a new class `ElectricCar` that:

// 1. Extends the `Car` class
// 2. Adds a new property:
//     - batteryRange
// 3. Overrides the `drive()` method:
//     - Reduces batteryRange by 20
// 4. Adds a new method:
//     - `charge()` → sets batteryRange back to 100

// 📌 Must use `extends` and `super()`.

class ElectricCar extends Car {
  constructor(brand, price, batteryRange) {
    super(brand, price);
    this.batteryRange = batteryRange;
  }
  drive() {
    this.batteryRange = this.batteryRange - 20;
  }
  charge() {
    this.batteryRange = 100;
  }
}

const tesla = new ElectricCar("Tesla", 6000, 100);

tesla.drive();
console.log(tesla.batteryRange);

tesla.charge();
console.log(tesla.batteryRange);

// # 🔹 PART 6: POLYMORPHISM

// ## 🎭 Task 7: Same Method, Different Behavior

// 1. Create:
//     - One `Car` object
//     - One `ElectricCar` object
// 2. Call `drive()` on both.

// 📌 Each object should behave differently.

const regularCar = new Car("Toyota", 30000);
const electricCar = new ElectricCar("Tesla", 60000, 100);

regularCar.drive();
electricCar.drive();

console.log(regularCar.getInfo());
console.log("Electric car battery:", electricCar.batteryRange);

// # PART 7: MINI CHALLENGE

// ## 🏁 Task 8: Garage Manager

// Create a class called `Garage` that:

// 1. Has a constructor with:
//     - garageName
//     - cars (an empty array)
// 2. Has these methods:
//     - `addCar(car)` → adds a car to the array
//     - `listCars()` → returns a list of car brands
//     - `findExpensive(limit)`
//         - Returns all cars above the limit

// 📌 Must use:

// - class methods
// - arrays inside the class
// - `this`

class Garage {
  constructor(garageName) {
    this.garageName = garageName;
    this.cars = [];
  }
  addCar(car) {
    this.cars = this.cars + car;
  }
  listCars() {
    this.cars;
  }
  findExpensive(limit) {
    if (limit < this.cars) {
      return this.cars;
    }
  }
}
