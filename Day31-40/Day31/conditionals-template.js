// ==========================
// 🌟 JavaScript Conditionals - Basics
// ==========================

// 1️⃣ IF statement
let age = 18;
if (age >= 18) {
  console.log("✅ You are an adult.");
}

// 2️⃣ IF...ELSE
let isRaining = false;
if (isRaining) {
  console.log("☔ Take an umbrella!");
} else {
  console.log("🌞 Enjoy the weather!");
}

// 3️⃣ IF...ELSE IF...ELSE
let marks = 85;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}

// 4️⃣ TERNARY OPERATOR
let number = 11;
let result = (number % 2 === 0) ? "Even Number" : "Odd Number";
console.log(result);

// 5️⃣ SWITCH STATEMENT
let color = "green";

switch (color) {
  case "red":
    console.log("Stop 🚦");
    break;
  case "yellow":
    console.log("Get Ready ⚠️");
    break;
  case "green":
    console.log("Go ✅");
    break;
  default:
    console.log("Invalid color");
    break;
}
