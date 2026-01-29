//? Callback
// A callback is just a function that you pass as an argument to another function, to be called later
//? Why is it called a callback function
// Because it is a function that is called back later.
// You pass a function - that function is called back later
//? Why is it used
// Because some tasks take time like: fetching data, database queries, etc. So, javaScript doesn't want to freeze while waiting instead it does other tasks and that previous time consuming task is called back after finishing.

//* Synchronous Callback: You call it manually!
function greet(name, callback) {
  console.log("Hi" + name);
  callback(); // calling the passed function; JavaScript waits here until the callback finishes
}
greet("Abiral", function () {
  console.log("How are you?");
});

//* Asynchronous Callback: Browser calls it!
console.log("Start");
setTimeout(() => {
  console.log("Data fetching complete!"); // Javascript doesnot wait for the callback funciton to finish
  console.log("End");
}, 2000);
console.log("Doing other task..."); // Does the other task
