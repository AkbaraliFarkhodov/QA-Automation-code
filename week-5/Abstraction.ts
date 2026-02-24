class CoffeeMachine {
  makeCoffee() {
    this.#boilWater();
    this.#brew();
    console.log("Coffee ready!");
  }
  #boilWater() {}
  #brew() {}
}
const machine = new CoffeeMachine();
machine.makeCoffee();
