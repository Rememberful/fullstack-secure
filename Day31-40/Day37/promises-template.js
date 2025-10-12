// 1️⃣ Basic Promise
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Task completed!");
  else reject("Task failed!");
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Operation finished"));

// 2️⃣ Promise with asynchronous task
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    let dataFetched = true;
    if (dataFetched) resolve("Data fetched successfully!");
    else reject("Failed to fetch data.");
  }, 2000);
});

fetchData
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Fetch operation complete"));

// 3️⃣ Promise chaining
function step1() {
  return new Promise(resolve => setTimeout(() => resolve("Step 1 done"), 1000));
}
function step2() {
  return new Promise(resolve => setTimeout(() => resolve("Step 2 done"), 1000));
}

step1()
  .then(result => {
    console.log(result);
    return step2();
  })
  .then(result => {
    console.log(result);
    console.log("All steps completed!");
  });

// 4️⃣ Promise with error handling
function stepWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Something went wrong!"), 1000);
  });
}

stepWithError()
  .then(result => console.log(result))
  .catch(error => console.error("Error caught:", error))
  .finally(() => console.log("Process complete"));
