// ====================================================
// 🌟 JAVASCRIPT ARRAYS — COMPLETE TEMPLATE
// ====================================================

// 1️⃣ ARRAY DECLARATION
const fruits = ["Apple", "Banana", "Mango"];
let colors = new Array("Red", "Green", "Blue");
let emptyArr = [];

// 2️⃣ ACCESS ELEMENTS
console.log(fruits[0]); // "Apple"
console.log(fruits[fruits.length-1]); // "Mango"

// 3️⃣ MODIFY ARRAY
fruits.push("Orange"); // add end
fruits.pop(); // remove end
fruits.unshift("Strawberry"); // add start
fruits.shift(); // remove start
console.log(fruits);

// 4️⃣ COMMON METHODS
console.log(fruits.length);
console.log(fruits.indexOf("Banana"));
console.log(fruits.includes("Mango"));
console.log(fruits.concat(["Kiwi", "Pineapple"]));
console.log(fruits.slice(1,3));
fruits.splice(1,1,"Blueberry","Peach");
console.log(fruits);

// 5️⃣ ITERATION
fruits.forEach((fruit,index) => console.log(index, fruit));
for(let fruit of fruits) console.log(fruit);

// 6️⃣ MAP, FILTER, REDUCE
const numbers = [1,2,3,4,5];
const squares = numbers.map(n => n*n);
console.log("Squares:", squares);

const evenNumbers = numbers.filter(n => n%2 === 0);
console.log("Even Numbers:", evenNumbers);

const sum = numbers.reduce((total,n)=>total+n,0);
console.log("Sum:", sum);

// 7️⃣ FIND / FINDINDEX
console.log(numbers.find(n => n>3)); // 4
console.log(numbers.findIndex(n => n>3)); // 3

// 8️⃣ SORT / REVERSE / JOIN
let letters = ["b","a","c"];
letters.sort();
console.log("Sorted:", letters);
letters.reverse();
console.log("Reversed:", letters);
console.log("Joined:", letters.join(", "));

// ✅ GOOD PRACTICES
// Use const for arrays if not reassigning
// Use map/filter/reduce for clarity
// Keep arrays homogeneous

// 🚫 BAD PRACTICES
// Modifying array while iterating
// Using global var
// Nested loops over large arrays

// ⚠️ SECURITY
// Validate array input from users
// Limit array size to prevent DoS
// Sanitize before inserting into DOM
