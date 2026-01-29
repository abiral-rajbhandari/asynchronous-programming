function fetchData(data, callback) {
  // Takes 2 sec to fetch data
  setTimeout(() => {
    console.log("Data:" + data);
    
    if (callback) {
      callback();
    }
  }, 2000);
}

//? Callback Hell
// callbacks inside callbacks inside callbacks
//? How does callback hell occur
// Because with callbacks, if you need to do things one after another, you must put the next task inside the previous callaback.

fetchData("dataA", () => {
  fetchData("dataB", () => {
    fetchData("dataC");
  });
});
