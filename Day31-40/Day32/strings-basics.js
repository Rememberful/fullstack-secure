// ====================================================
// 🌟 JAVASCRIPT STRINGS — COMPLETE TEMPLATE
// ====================================================

// 🔹 1️⃣ WHAT IS A STRING?
// A string is a sequence of characters used to represent text.
// You can use single quotes (''), double quotes (""), or backticks (``).

let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hello JavaScript!`;

console.log(singleQuote, doubleQuote, templateLiteral);

// 🔹 2️⃣ STRING CONCATENATION
let firstName = "Aditya";
let lastName = "Kumar";
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// Using Template Literal (Better way)
let fullNameTemplate = `${firstName} ${lastName}`;
console.log("Full Name (Template Literal):", fullNameTemplate);

// 🔹 3️⃣ STRING LENGTH
let message = "JavaScript";
console.log("Length of message:", message.length);

// 🔹 4️⃣ ACCESSING CHARACTERS
console.log("First Character:", message[0]);
console.log("Last Character:", message[message.length - 1]);

// 🔹 5️⃣ STRINGS ARE IMMUTABLE
let str = "Hello";
str[0] = "J"; // ❌ Won’t change
console.log("After change attempt:", str); // Still "Hello"

// ====================================================
// 🔹 COMMON STRING METHODS
// ====================================================

let text = "  JavaScript is Awesome!  ";

// 1️⃣ toUpperCase() & toLowerCase()
console.log("Upper:", text.toUpperCase());
console.log("Lower:", text.toLowerCase());

// 2️⃣ trim(), trimStart(), trimEnd()
console.log("Trimmed:", text.trim());
console.log("Trim Start:", text.trimStart());
console.log("Trim End:", text.trimEnd());

// 3️⃣ slice(start, end)
console.log("Slice (0, 10):", text.slice(0, 10));

// 4️⃣ substring(start, end)
console.log("Substring (4, 10):", text.substring(4, 10));

// 5️⃣ substr(start, length) — Deprecated (Avoid in modern JS)
console.log("Substr (4, 6):", text.substr(4, 6));

// 6️⃣ indexOf() & lastIndexOf()
console.log("Index of 'Script':", text.indexOf("Script"));
console.log("Last index of 'e':", text.lastIndexOf("e"));

// 7️⃣ includes() — Checks if a substring exists
console.log("Includes 'Awesome':", text.includes("Awesome"));

// 8️⃣ startsWith() & endsWith()
console.log("Starts with 'Java':", text.startsWith("Java"));
console.log("Ends with '!':", text.endsWith("!"));

// 9️⃣ replace() & replaceAll()
let sentence = "I love JS. JS is fun!";
console.log("Replace:", sentence.replace("JS", "JavaScript"));
console.log("Replace All:", sentence.replaceAll("JS", "JavaScript"));

// 🔟 split() — Converts string to array
let csv = "Apple,Banana,Mango";
let fruits = csv.split(",");
console.log("Split Result:", fruits);

// 11️⃣ concat()
let greet = "Hello".concat(" ", "World", "!");
console.log("Concatenated:", greet);

// 12️⃣ repeat()
console.log("Repeat:", "Hi! ".repeat(3));

// 13️⃣ charAt() & charCodeAt()
console.log("Character at 2:", message.charAt(2));
console.log("Character Code at 2:", message.charCodeAt(2));

// 14️⃣ padStart() & padEnd()
let num = "5";
console.log("Padded Start:", num.padStart(3, "0"));
console.log("Padded End:", num.padEnd(3, "*"));

// ====================================================
// 🔹 TEMPLATE LITERALS (ES6 FEATURE)
// ====================================================

// ✅ Allows variable interpolation and multiline strings
let city = "Delhi";
let weather = "Sunny";
let info = `City: ${city}
Weather: ${weather}
Status: ${weather === "Sunny" ? "Great Day!" : "Stay Inside"}`;
console.log(info);

// ====================================================
// 🔹 ESCAPE CHARACTERS
// ====================================================

let escapeExample = "He said, \"JavaScript is cool!\"";
console.log(escapeExample);

let multiline = "This is line 1\nThis is line 2";
console.log(multiline);

// ====================================================
// 🔹 STRING COMPARISONS
// ====================================================

let a = "apple";
let b = "Banana";
console.log("Case-sensitive Compare:", a < b); // true
console.log("Lowercase Compare:", a.toLowerCase() < b.toLowerCase());

// ====================================================
// 🔹 GOOD PRACTICES
// ====================================================
// ✅ Use template literals instead of '+' for concatenation
// ✅ Use toLowerCase() for case-insensitive comparisons
// ✅ Always trim() user input before validation
// ✅ Sanitize user input before inserting into HTML
// ✅ Keep string constants in variables (avoid magic strings)

let input = "   Hello JS   ";
let cleanInput = input.trim().toLowerCase();
console.log("Cleaned Input:", cleanInput);

// ====================================================
// 🔹 BAD PRACTICES
// ====================================================
// ❌ Hardcoding long strings directly
// ❌ Using '+' too often (reduces readability)
// ❌ Forgetting to sanitize user input before displaying
// ❌ Assuming strings are mutable

// Bad Example
let name = "Aditya";
name[0] = "a"; // ❌ This won’t change
console.log(name);

// ====================================================
// 🔹 SECURITY PRACTICES (VERY IMPORTANT)
// ====================================================
// ⚠️ Never trust user input when displaying on the webpage
// ⚠️ Avoid building HTML with raw string concatenation
// ⚠️ Prevent XSS (Cross Site Scripting) by escaping user data

// ❌ Dangerous Example (DO NOT DO THIS)
let userInput = "<img src=x onerror=alert('HACKED!')>";
// document.body.innerHTML = "<p>" + userInput + "</p>"; // ❌ Vulnerable

// ✅ Safe Example
let safeParagraph = document.createElement("p");
safeParagraph.textContent = userInput; // Escapes automatically
document.body.appendChild(safeParagraph);

// ====================================================
// 🔹 STRING CHALLENGES (Practice Section)
// ====================================================

// ✅ 1. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Reversed 'JavaScript':", reverseString("JavaScript"));

// ✅ 2. Count vowels in a string
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log("Vowels in 'Hello World':", countVowels("Hello World"));

// ✅ 3. Check if a string is a palindrome
function isPalindrome(str) {
  let clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}
console.log("Is 'madam' a palindrome?", isPalindrome("madam"));

// ====================================================
// ✅ END OF FILE
// ====================================================
