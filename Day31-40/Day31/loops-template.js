// ==========================
// 🌟 JavaScript Loops - Basics
// ==========================

// 1️⃣ FOR LOOP
for (let i = 1; i <= 5; i++) {
  console.log("For loop count:", i);
}

// 2️⃣ WHILE LOOP
let count = 1;
while (count <= 5) {
  console.log("While loop count:", count);
  count++;
}

// 3️⃣ DO...WHILE LOOP
let num = 1;
do {
  console.log("Do-While count:", num);
  num++;
} while (num <= 3);

// 4️⃣ FOR...IN LOOP (Objects)
let user = { name: "Aditya", age: 21, city: "Delhi" };
for (let key in user) {
  console.log(key + ":", user[key]);
}

// 5️⃣ FOR...OF LOOP (Arrays)
let fruits = ["🍎", "🍌", "🍇"];
for (let fruit of fruits) {
  console.log(fruit);
}

// 6️⃣ BREAK and CONTINUE
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break;    // stop at 5
  console.log("Loop value:", i);
}

// ✅ GOOD PRACTICE
// Using for...of for array iteration
let colors = ["red", "green", "blue"];
for (let color of colors) console.log("Color:", color);

// 🚫 BAD PRACTICE
// ❌ Infinite loop example (don’t run this!)
// while (true) {
//   console.log("This never stops!");
// }

// ⚠️ SECURITY
// Always validate user input before using it to control loops
