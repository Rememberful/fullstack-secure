// ===============================
// 🌟 JavaScript Basics: Variables & Data Types
// ===============================

// ----- VARIABLES -----

// Declaring variables
var oldWay = "I'm declared using var (avoid this if possible)";
let name = "Aditya";          // modern variable declaration
const birthYear = 2005;       // constant (cannot be reassigned)

// Logging values
console.log("Using var:", oldWay);
console.log("Using let:", name);
console.log("Using const:", birthYear);

// Example of reassignment
let age = 20;
age = 21; // allowed
console.log("Updated age:", age);

// const cannot be reassigned (uncomment to see error)
// birthYear = 2006; // ❌ TypeError

// ----- DATA TYPES -----

// Primitive types
let userName = "Aditya";              // String
let score = 95;                       // Number
let isOnline = true;                  // Boolean
let country;                          // Undefined
let car = null;                       // Null
let uniqueID = Symbol("id");          // Symbol
let bigNumber = 12345678901234567890n; // BigInt

// Display data types
console.log("\n===== Primitive Data Types =====");
console.log("String:", userName, "| typeof:", typeof userName);
console.log("Number:", score, "| typeof:", typeof score);
console.log("Boolean:", isOnline, "| typeof:", typeof isOnline);
console.log("Undefined:", country, "| typeof:", typeof country);
console.log("Null:", car, "| typeof:", typeof car); // typeof null → "object" (known bug)
console.log("Symbol:", uniqueID, "| typeof:", typeof uniqueID);
console.log("BigInt:", bigNumber, "| typeof:", typeof bigNumber);

// Non-Primitive types
let user = { name: "Aditya", age: 20 }; // Object
let fruits = ["apple", "banana", "mango"]; // Array
function greet() {
  console.log("Hello from function!");
}

console.log("\n===== Non-Primitive Data Types =====");
console.log("Object:", user, "| typeof:", typeof user);
console.log("Array:", fruits, "| typeof:", typeof fruits);
console.log("Function:", greet, "| typeof:", typeof greet);

// ----- TYPE CONVERSION -----
console.log("\n===== Type Conversion =====");
let numStr = "25";
let converted = Number(numStr); // convert string → number
console.log("'25' as number:", converted, "| typeof:", typeof converted);

// Bad (implicit) conversion
console.log("'5' + 1 =", "5" + 1); // "51" - string concatenation
console.log("'5' - 1 =", "5" - 1); // 4 - automatic conversion

// Good (explicit) conversion
console.log("Number('5') + 1 =", Number("5") + 1);

// ----- SECURITY & BEST PRACTICES -----
console.log("\n===== Best & Security Practices =====");
console.log("✅ Use const for constants and let for changeable values");
console.log("✅ Avoid using var to prevent scope issues");
console.log("✅ Validate all user inputs before using them");
console.log("✅ Always use strict equality (===) for comparisons");

// Strict vs loose equality
console.log("0 == false →", 0 == false);   // true 😬
console.log("0 === false →", 0 === false); // false ✅
