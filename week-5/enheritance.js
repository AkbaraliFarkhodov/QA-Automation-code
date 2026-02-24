class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`${this.name} is sleeping...`);
  }
  eat() {
    console.log(`${this.name} is eating now!`);
  }
  introduce() {
    console.log(
      `The animal's name is ${this.name} and it's ${this.age} years old`,
    );
  }
}
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog("buddy", 3, "Golden Retriever");
dog.sleep();
dog.eat();
dog.introduce();
dog.bark();

//INHERITANCE WITH EXTENDS AND SUPER

class Animal2 {
  constructor(name, age) {
    this.game = name;
    this.age = age;
  }
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
  eat() {
    console.log(`${this.name} is eating now!`);
  }
  introduce() {
    console.log(
      `The animal's name is ${this.age} and it's ${this.age} years old.`,
    );
  }
}

class Dog2 extends Animal2 {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  bark() {
    console.log("Woof!");
  }
}

const dog2 = new Dog2("Buddy", 3, "Golden Retriever");

dog2.sleep();
dog2.eat();
dog2.introduce();
dog2.bark();
