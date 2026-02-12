class ChaseBankAccount {
  #balance;
  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }
  get balance() {
    return this.#balance;
  }
  set balance(amount) {
    if (amount >= 0) {
      this.#balance = amount;
    } else {
      console.error("Balance cannot be negative!");
    }
  }
}

const account = new ChaseBankAccount("Alice", 500);

console.log(account.balance);

account.balance = 1000;

console.log(account.balance);

// 2nd Method

class CapitalOneBankAccount {
  #balance;
}
