function greet(name: string, age: number) {
  console.log(`Hi my name is ${name} and I am ${age} years old`);
}

greet("alice", 25);

// Default
function greetUser(name: string = "Guest", age: number = 32) {
  console.log(`Hello I am ${name} and I am ${age} years old`);
}

greetUser();
greetUser("Johnathan", 28);

// Value Types

function add(a: number, b: number): number {
  return a + b;
}

add(2, 3);

function printSomething(): void {
  console.log("hello");
}

printSomething();

function checkBalance(amount: number): Promise<string> {
  const balance = 500;
  if (amount<= balance){
    return Promise.resolve{
        `Withdrawal of $${amount} is successful. Remaining balance is $${balance- amount}`
    }
  }
}
