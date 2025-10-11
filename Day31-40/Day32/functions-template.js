// ====================================================
// 🌟 JAVASCRIPT FUNCTIONS — COMPLETE TEMPLATE
// ====================================================

// 🔹 1️⃣ BASIC FUNCTION DECLARATION
function greet() {
  console.log("Hello, welcome to JavaScript Functions!");
}
greet(); // ✅ Function call

// 🔹 2️⃣ FUNCTION WITH PARAMETERS
function greetUser(name) {
  console.log("Hello, " + name + "!");
}
greetUser("Aditya");

// 🔹 3️⃣ FUNCTION WITH RETURN VALUE
function add(a, b) {
  return a + b;
}
let sum = add(5, 10);
console.log("Sum:", sum);

// 🔹 4️⃣ FUNCTION EXPRESSION
// Functions can be stored in variables
const multiply = function (x, y) {
  return x * y;
};
console.log("Multiply:", multiply(3, 4));

// 🔹 5️⃣ ARROW FUNCTIONS (ES6)
const divide = (a, b) => {
  return a / b;
};
console.log("Divide:", divide(20, 5));

// 🔹 6️⃣ ARROW FUNCTION (Single line, implicit return)
const square = n => n * n;
console.log("Square:", square(6));

// 🔹 7️⃣ DEFAULT PARAMETERS
function greetCountry(country = "India") {
  console.log(`Hello from ${country}!`);
}
greetCountry(); // Uses default
greetCountry("Japan");

// 🔹 8️⃣ FUNCTION WITH MULTIPLE PARAMETERS
function userDetails(name, age, city) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}
userDetails("Aditya", 21, "Delhi");

// 🔹 9️⃣ REST PARAMETERS (...args)
function showNumbers(...numbers) {
  console.log("Numbers:", numbers);
}
showNumbers(1, 2, 3, 4, 5);

// 🔹 🔟 FUNCTION SCOPE (Local vs Global)
let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  console.log(globalVar); // Accessible
  console.log(localVar); // Accessible
}
testScope();
// console.log(localVar); // ❌ Error: localVar is not defined

// 🔹 11️⃣ NESTED FUNCTIONS
function outer() {
  function inner() {
    console.log("I am inside the outer function");
  }
  inner();
}
outer();

// 🔹 12️⃣ FUNCTION RETURNING FUNCTION (Closure)
function makeMultiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = makeMultiplier(2);
console.log("Double:", double(10)); // 20

// 🔹 13️⃣ IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
(function () {
  console.log("IIFE executed immediately!");
})();

// 🔹 14️⃣ CALLBACK FUNCTION
function processUserInput(callback) {
  let name = "Aditya";
  callback(name);
}
processUserInput(function (name) {
  console.log("Hello, " + name);
});

// 🔹 15️⃣ ARROW FUNCTIONS AS CALLBACKS
setTimeout(() => console.log("Arrow callback executed!"), 1000);

// 🔹 16️⃣ ANONYMOUS FUNCTIONS
setTimeout(function () {
  console.log("Anonymous function called after 2 seconds");
}, 2000);

// 🔹 17️⃣ FUNCTION HOISTING
hoisted(); // ✅ Works (function declarations are hoisted)
function hoisted() {
  console.log("This function is hoisted!");
}

// 🔹 18️⃣ PURE FUNCTION (Good Practice)
function pureAdd(a, b) {
  return a + b; // No side effects
}
console.log("Pure Function:", pureAdd(2, 3));

// 🔹 19️⃣ IMPURE FUNCTION (Bad Practice)
let total = 0;
function impureAdd(a) {
  total += a; // modifies external variable
  return total;
}
console.log("Impure Function:", impureAdd(5));

// 🔹 20️⃣ GOOD PRACTICES
// ✅ Use clear, meaningful names
// ✅ Keep functions small and focused
// ✅ Return values instead of printing (more reusable)
// ✅ Use arrow functions for short callbacks
// ✅ Avoid polluting global scope
// ✅ Use default/rest parameters wisely

// 🔹 21️⃣ BAD PRACTICES
// ❌ Function does too many things
// ❌ Unclear naming
// ❌ Global variable modification
// ❌ Using `var` instead of `let`/`const`
// ❌ No return statements when needed

// 🔹 22️⃣ SECURITY PRACTICES
// ⚠️ Never use `eval()` — executes arbitrary code, unsafe
// ⚠️ Validate input types before using them
// ⚠️ Don’t rely on user-provided data for logic without checks

// Example: Bad
function runUserCode(userInput) {
  // ❌ Dangerous — executes arbitrary JS code
  // eval(userInput);
}

// Example: Good
function safeRun(userInput) {
  if (typeof userInput === "string") {
    console.log("Processing safe string:", userInput);
  }
}

// 🔹 23️⃣ ADVANCED: ARROW FUNCTION LIMITATIONS
// ❌ No own 'this' or 'arguments' binding
const obj = {
  name: "Aditya",
  regularFunc: function () {
    console.log("Regular:", this.name);
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name); // 'this' not bound correctly
  }
};
obj.regularFunc(); // ✅ Works
obj.arrowFunc(); // ⚠️ Undefined

// ====================================================
// ✅ END OF FILE
// ====================================================
