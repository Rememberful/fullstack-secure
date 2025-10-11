// ==========================
// 🌟 JavaScript Operators - Basics
// ==========================

// 1️⃣ Arithmetic Operators
let a = 10, b = 3;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// 2️⃣ Assignment Operators
let x = 5;
x += 2;
console.log("x after += 2:", x);

// 3️⃣ Comparison Operators
console.log("5 == '5' :", 5 == '5');
console.log("5 === '5' :", 5 === '5');
console.log("5 === 5 :", 5 === 5);
// 4️⃣ Logical Operators
let age = 22;
if (age > 18 && age < 60) console.log("Eligible to work");

// 5️⃣ String Operator
let first = "Hello";
let second = "World";
console.log(first + " " + second);

// 6️⃣ Type Operator
console.log(typeof 123);        // number
console.log(typeof "Aditya");   // string
console.log([1,2,3] instanceof Array); // true

// 7️⃣ Ternary Operator
let marks = 85;
let grade = (marks >= 80) ? "A" : "B";
console.log("Grade:", grade);
