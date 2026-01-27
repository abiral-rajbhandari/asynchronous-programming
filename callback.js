// Callback: A callback is just a function that you pass as an argument to another function, to be called later

// Synchronous Callback:
function greet(name, callback) {
  console.log("Hi" + name);
  callback(); // calling the passed function; JavaScript waits here until the callback finishes
}

greet("Abiral", function () {
  console.log("Hello World!");
});

// Asynchronous Callback:
console.log("Start");

setTimeout(() => {
  console.log("Callback function execution complete."); // Javascript doesnot wait for the callback funciton to finish
}, 2000);

console.log("Doing other work..."); // Does the other work
