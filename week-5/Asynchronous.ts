// Maker
function makeBurger() {
  return new Promise((resolve, reject) => {
    console.log("Making your burger");

    setTimeout(() => {
      const success = true;
      console.log("Burger is ready");
      if (success) {
        resolve("Burger Served!");
      } else {
        reject("Burger is burnt!");
      }
    }, 3000);
  });
}
// Reciver

makeBurger()
  .then((message) => {
    console.log("Reviever:", message);
    console.log("Enjoy your meal!");
  })
  .catch((error) => {
    console.log("Reciever error:", error);
  })
  .finally(() => {
    console.log("I always run no matter what");
  });
