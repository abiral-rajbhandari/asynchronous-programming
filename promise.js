//? Class
// A class is a blueprint(template) for creating objects.

//? Constructor
// A constructor is a special function that runs automatically when an object is created.
// Its job: Set initial values to the object

//? Example of class, object, constructor:
/*
class Car {
  constructor(brandName, color) {
    this.brandName = brandName;
    this.color = color;
  }
}

const objName = new Car("BMW", "Silver");

console.log(objName.brandName);
*/

//? Promise syntax
/*
new Promise creates a Promise object, A Promise always starts in the pending state.
It can transition to either: 
    1.fulfilled (when resolve() is called)
    2.rejected (when reject() is called)
The Promise constructor takes a function as its parameter, often called the executor function.
That executor function takes two functions as parameters: 
    1.resolve() – call resolve() to fulfill the promise. 
    2.reject() – call reject() to reject the promise.
*/

//* Promise:
function fetchData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data:" + data);
      if (data) {
        resolve("data fetched successfully :)");
      } else {
        reject("failed to fetch data :(");
      }
    }, 2000);
  });
}

//* Promise Chaining:
// fetchData("dataA")
//   .then((message) => {
//     console.log(message);
//     return fetchData("dataB");
//   })
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

//* async/await:
async function fetchAllData() {
  try {
    const response = await fetchData("dataA");
    console.log(response);
    await fetchData("dataB");
  } catch (error) {
    console.log(error);
  }
}

fetchAllData();