function calculator(num1, num2, callback) {
  setTimeout(() => {
    callback(num1, num2);
  }, 3000);
}

// Calls calculator asynchronously (3s delay) to perform addition,
// then calls it again to perform subtraction after the first finishes.
calculator(1, 2, function (a, b) {
  console.log("Addition:", a + b);
  calculator(2, 1, function (a, b) {
    console.log("Subtraction:", a - b);
  });
});
