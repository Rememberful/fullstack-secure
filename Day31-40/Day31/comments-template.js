// ==========================
// 🌟 JavaScript Comments - Basics
// ==========================

// 1️⃣ Single-line comment
// Declaring a variable to store user name
let userName = "Aditya";

// 2️⃣ Inline comment
let userAge = 21; // User's current age

// 3️⃣ Multi-line comment
/* 
This program demonstrates different types of comments in JavaScript.
Comments help in code readability and understanding.
*/

// 4️⃣ Commenting out code (disabling temporarily)
// console.log("This won't show in the console");

console.log("✅ JavaScript Comments Example Running!");

// 5️⃣ Good Example
// Check if user is adult
if (userAge >= 18) {
  console.log("User is an adult.");
} else {
  console.log("User is a minor.");
}

// 🚫 BAD PRACTICE
// increment age by 1 (This is obvious)
userAge++; // This doesn’t need a comment

// ⚠️ SECURITY WARNING
// ❌ Never do this:
// API_KEY = "12345-SECRET-KEY"; // Don't store secrets or mention sensitive info in comments
