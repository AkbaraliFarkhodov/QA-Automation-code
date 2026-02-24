// ## Task 1: Price Calculator

// Create a function called **calculateTotal**.

// Requirements:

// - It must accept two parameters: price and quantity.
// - Both parameters must be typed as numbers.
// - The function must return a number.
// - It should return the result of multiplying price by quantity.

function calculateTotal(price: number, quantity: number) {
  return price * quantity;
}

console.log(calculateTotal(23, 43));

// ## Task 2: Greeting with Default Parameter

// Create a function called **greetUser**.

// Requirements:

// - It must accept a name parameter (string).
// - It must accept a role parameter that defaults to "User".
// - The function must return a string.
// - The returned string should greet the user and mention their role.

function greetUser(name: string = "User") {
  return `Hello, ,my name is ${name} and I am A QA engineer`;
}

console.log(greetUser("Akbarali"));

// ## Task 3: Void Function

// Create a function called **logMessage**.

// Requirements:

// - It must accept a string parameter.
// - The return type must be void.
// - It should log the message to the console.

function logMessage(name: string): void {
  console.log(`Hi my name is ${name}`);
}

logMessage("Akbarali");

// ## Task 4: Simple Promise

// Create a function called **validatePassword**.

// Requirements:

// - It must accept a string parameter called password.
// - It must return a Promise of type string.
// - If the password length is at least 8 characters, resolve with the message "Valid password".
// - Otherwise, reject with the message "Password too short".

function validatePassword(password: string): Promise<string> {
  const length = 8;
  if (password.length >= length) {
    return Promise.resolve("Valid Password");
  } else {
    return Promise.reject("Password too short");
  }
}

console.log(validatePassword("Helloworld"));

// ## Task 5: Async Function

// Create an async function called **checkPassword**.

// Requirements:

// - It must call the validatePassword function.
// - It must use await.
// - It must use try/catch.
// - It should log either the success message or the error message.

async function checkPassword() {
  try {
    const result = await validatePassword("Hello world");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

checkPassword();

// ## Task 6: Literal Type

// Create a literal type called **OrderStatus**.

// It must allow only the following values:

// - "pending"
// - "shipped"
// - "delivered"

// Then create a variable that uses this type.

let orderStatus: "pending" | "shipped" | "loading";

orderStatus = "pending";
orderStatus = "shipped";
orderStatus = "loading";

// ## Task 7: Union Type

// Create a type alias called **ID**.

// It must allow:

// - number
// - string

// Then create two variables using this type (one number and one string).

type ID = number | string;

let ID1: ID = 123;
let ID2: ID = "ALI";

console.log(ID1, ID2);

// ## Task 8: Basic Interface

// Create an interface called **User**.

// It must contain:

// - id (number)
// - name (string)
// - email (string)

// Then create an object using this interface.

interface user {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

const user1: user = {
  id: 12345,
  name: "johndoe",
  email: "johndoe@hotmail.com",
};

// ## Task 9: Optional Property

// Update the **User** interface.

// Add:

// - phone (optional string)

// Create a new user object that does not include the phone property.

const user3: user = {
  id: 12345,
  name: "Johndoe",
  email: "johndoe@hotmail.com",
  phone: "646-427-6977",
};

// ## Task 10: Extending Interfaces

// Create a new interface called **Admin**.

// Requirements:

// - It must extend the User interface.
// - It must include a role property that only allows the literal value "admin".
// - It must include a permissions property (array of strings).

// Then create an Admin object.

interface Admin extends user {
  role: "admin";
  permisson: string[];
}

const admin2: Admin = {
  id: 12345,
  name: "johndoe",
  email: "johndoe@hotmail.com",
  role: "admin",
  permisson: ["read", "write"],
};

// ## Task 11: Pick

// Using the User interface, create a new type called **UserPreview**.

// Requirements:

// - It must only include id and name.
// - Create an object using this type.

type UserPreview = Pick<user, "id" | "name">;

const preview: UserPreview = {
  id: 1234,
  name: "Ali",
};

// ## Task 12: Omit

// Using the User interface, create a new type called **PublicUser**.

// Requirements:

// - It must exclude the email property.
// - Create an object using this type.

type PublicUser = Omit<user, "email">;

const publics: PublicUser = {
  id: 4232,
  name: "ali",
};

// ## Task 13: Tuple

// Create a tuple type called **UserTuple**.

// It must:

// - Have exactly three values.
// - First value must be a string.
// - Second value must be a number.
// - Third value must be a boolean.

// Then create one variable using this tuple type.

type UserTuple = [string, number, boolean];
let User: UserTuple = ["hello", 67, true];

// ## Task 14: Mini Product System

// ### Step 1

// Create an interface called **Product**.

// It must include:

// - id (use the ID type from Task 7)
// - name (string)
// - price (number)
// - status (use the OrderStatus type)
// - discount (optional number)
