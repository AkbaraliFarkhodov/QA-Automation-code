import multiply from "./mathUtils.js";

import add from "./mathUtils.js";

import substract from "./mathUtils.js";

console.log(add(2, 5));
console.log(substract(10, 6));
console.log(multiply(4, 2));

//class ---------

import User from "./User.js";

const user1 = new User("Alice", "alice@example.com");
user1.displayInfo();

//Exporting everything

import * as MathUtils from "./mathUtils.js";

console.log(MathUtils.add(3, 5));
