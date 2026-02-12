class User {
  static count = 0;
  constructor(name) {
    this.name = name;
    User.count++;
  }
  static displayCount() {
    console.log(`Total users created: ${User.count}`);
  }
}

const user1 = new User("Alice");
const user2 = new User("Bob");
const user3 = new User("Charlie");

// user1.displayCount();
User.displayCount();
