// =========================================
// 🔹 1. Array Destructuring
// =========================================

// ✅ Basic
let numbers = [10, 20, 30];
let [a, b, c] = numbers;
console.log(a, b, c); // 10 20 30

// ✅ Skip values
let [x, , z] = [1, 2, 3];
console.log(x, z); // 1 3

// ✅ Default values
let [p, q = 5] = [10];
console.log(p, q); // 10 5

// ✅ Nested array destructuring
let nested = [1, [2, 3]];
let [m, [n, o]] = nested;
console.log(m, n, o); // 1 2 3

// =========================================
// 🔹 2. Object Destructuring
// =========================================

// ✅ Basic
let person = { name: "Aditya", age: 21 };
let { name, age } = person;
console.log(name, age); // Aditya 21

// ✅ Renaming variables
let user = { id: 101, username: "Aditya" };
let { id: userId, username: userName } = user;
console.log(userId, userName); // 101 Aditya

// ✅ Default values
let { city = "Unknown" } = user;
console.log(city); // Unknown

// ✅ Nested object destructuring
let student = {
  name: "Riya",
  marks: { math: 95, science: 90 }
};
let {
  name: studentName,
  marks: { math, science }
} = student;
console.log(studentName, math, science); // Riya 95 90

// =========================================
// 🔹 3. Destructuring in Function Parameters
// =========================================

// ✅ Object destructuring in parameters
function showStudent({ name, grade }) {
  console.log(`${name} is in grade ${grade}`);
}

let s1 = { name: "Aditya", grade: 10 };
showStudent(s1); // Aditya is in grade 10

// ✅ Array destructuring in parameters
function sum([a, b, c]) {
  return a + b + c;
}
console.log(sum([1, 2, 3])); // 6

// =========================================
// ⚠️ 4. Bad Practice ❌
let [v1, v2, v3] = [1, 2];
console.log(v3); // undefined (not enough values)

// =========================================
// ✅ 5. Good Practice ✔️
let [d1, d2, d3 = 0] = [1, 2]; // add default
console.log(d3); // 0
