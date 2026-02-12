class ATM {
  #cashInside = 0;
  deposit(amount) {
    if (amount > 0) {
      const finalAmount = this.#applyBonus(amount);
      this.#cashInside += finalAmount;
    }
  }
  withDraw(amount) {
    if (amount > 0 && amount <= this.#cashInside) {
      this.#cashInside -= amount;
      return amount;
    }
    return 0;
  }
  checkBalance() {
    return this.#cashInside;
  }
  #applyBonus(amount) {
    return amount + amount * 0.01;
  }
}

const atm = new ATM();
atm.deposit(500);
console.log(atm.checkBalance());

const withdrawn = atm.withDraw(200);
console.log(withdrawn);
console.log(atm.checkBalance());
