// primitive data types

// 1. String

let user = "Ali";
console.log(user);

// 2. number

let userID = 6977;
console.log(userID);

// 3. boolean

let isPractice = true;
console.log(isPractice);

// 4. null

let userAdmin = null;
userAdmin = "Ali";
console.log(userAdmin);

// 5. undefined

let users = undefined;
users = "Ali";
console.log(users);

//NON - PRIMITIVE DATA

// 6. ARRAY

let pastScores = [2, 5, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4];
console.log(pastScores);

// 6. OBJECT

let student = {
  name: "aliya",
  age: 1,
  from: "Queens",
  likesMilk: true,
};
console.log(typeof student);

// DIFFERENCE BETWEEN MUTABLE AND IMMUTABLE

// MUTABLE DATA (NON PRIMITIVE) - Mutable means the value can be changed after it is created.

let student2 = {
  name: "aliya",
  age: 1,
  from: "Queens",
  likesMilk: true,
};

student.name = "ali";

console.log(student);

//IMMUTABLE DATA (PRIMITIVE) - Immutable means the value cannot be changed once created.
// If you “change” it, JavaScript actually creates a new value.

let student3 = "John";

student3 = "aliya"; //changes value (immutable)
console.log(student3);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CONTROL FLOW

// IF - Executes a block of code if the condition is true

let roll = 5;

if (roll === 5) {
  console.log("You did it");
}
// roll is equal to 5, if roll is equal to 5 then print "you did it"

// IF ELSE

let aka = "Akbar";

if (aka === "Akbar") {
  console.log("akbar aka");
} else {
  console.log("I said say it");
}

// aka is equal to "Akbar", if aka is euqal to "akbar" then print "akbar aka" or else print "I said say it"

// ELSE IF

let uka = "Ali";

if (uka === "alijon") {
  console.log("Aliaskar");
} else if (uka === "akbar") {
  console.log("akasi");
} else if (uka === "ila") {
  console.log("name spelled wrong");
} else {
  console.log("this is weird");
}

// uka is equal to "Akbar", if aka is equal to "alijon" then print "Aliaskar", or if uka = "akbar" then print "akasi",
// or if uka is equal to "ila" then print "name spelled wrong", if non is true then just print "this is weird"

let soda = 23;

switch (soda) {
  case 20:
    console.log("I got you a coke");
    break;
  case 24:
    console.log("I got you a Fanta");
    break;
  case 21:
    console.log("I got you a Sprite");
    break;
  default:
    console.log("What kind of sode did you get me today?");
}
