// console.log("First Aditya");
// console.log("Second Utsav");

// setTimeout(() => {
//     console.log("Executed inside");
// }, 2000);
// setTimeout(() => {
//     console.log("2nd execution");
// }, 0);

// console.log("The End");
// setTimeout(() => {
//     console.log("execution");
// }, 1000);

// function greetUser(name, callback) {
//   console.log("Hello, " + name);
//   callback(); // calling the callback function
// }

// function sayBye() {
//   console.log("Goodbye!");
// }

// // Passing sayBye as callback
// greetUser("Aditya", sayBye);

//Asynchronous callback
function fetchData(callback) {
  console.log("Fetching data for Aditya...");
  setTimeout(() => {
    console.log("Data fetched for Aditya!");
    callback(); // execute callback after 2 seconds
  }, 2000);
}

fetchData(() => {
  console.log("Processing the data now for Aditya...");
});
