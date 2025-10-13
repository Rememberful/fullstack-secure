// let a = prompt("Enter first number:");

// let b = prompt("Enter second number:");

// if(isNaN(a) || isNaN(b)){
//     throw SyntaxError("Sorry this is not allowed");
// }
// let sum = parseInt(a)+parseInt(b);

// console.log("The sum is", sum);

// let a = prompt("Enter first number:");

// let b = prompt("Enter second number:");

// if (isNaN(a) || isNaN(b)) {
//     throw SyntaxError("Sorry this is not allowed");
// }
// let sum = parseInt(a) + parseInt(b);

// try {
//     console.log("The sum is", sum * x);
// } catch (error) {
//     console.log("Error agya bhai");
// }

//introducing finally in try ..catch
let a = prompt("Enter first number:");

let b = prompt("Enter second number:");
try {
  console.log("Trying something risky...");
  throw new Error("Custom error occurred!");
} 
catch (error) {
  console.log("Caught error:", error.message);
} 
finally {
  console.log("This always runs — even if there’s an error.");
}

