// =========================================
// 🔹 1. Basic IIFE
// =========================================
(function () {
  console.log("This function runs immediately!");
})();

// Output: This function runs immediately!

// =========================================
// 🔹 2. IIFE with Parameters
// =========================================
(function (name) {
  console.log(`Hello, ${name}!`);
})("Aditya");

// Output: Hello, Aditya!

// =========================================
// 🔹 3. IIFE with Return Value
// =========================================
let result = (function (a, b) {
  return a + b;
})(10, 20);

console.log(result); // 30

// =========================================
// 🔹 4. Arrow Function IIFE
// =========================================
(() => {
  console.log("Arrow IIFE executed!");
})();

// With parameters
((x, y) => {
  console.log(`Sum: ${x + y}`);
})(5, 10);

// =========================================
// 🔹 5. IIFE for Data Privacy (Encapsulation)
const counter = (function () {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
      console.log("Count:", count);
    },
    reset: function () {
      count = 0;
      console.log("Counter reset!");
    },
  };
})();

counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.reset();     // Counter reset!

// =========================================
// ⚠️ 6. Bad Practice ❌
// =========================================
// Missing parentheses around function
// function test() {
//   console.log("Not an IIFE");
// }(); // ❌ SyntaxError

// =========================================
// ✅ 7. Good Practice ✔️
// =========================================
(function test() {
  console.log("This is a valid IIFE");
})();
