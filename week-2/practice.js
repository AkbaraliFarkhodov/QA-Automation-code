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

// MUTABLE DATA - Mutable means the value can be changed after it is created.

let student2 = {
  name: "aliya",
  age: 1,
  from: "Queens",
  likesMilk: true,
};

student.name = "ali";

console.log(student);
