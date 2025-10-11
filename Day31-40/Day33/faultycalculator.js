const readline = require("readline-sync");

let random = Math.random();
let a = Number(readline.question("Enter first number: "));
let c = readline.question("Enter operator (+, -, *, /): ");
let b = Number(readline.question("Enter second number: "));

let obj = {
    "+": "-",
    "-": "*",
    "*": "+",
    "/": "**"
}

console.log(random); // for testing purpose

if (random > 0.1) {
    console.log(`The result is: ${eval(`${a} ${c} ${b}`)}`);
} else {
    c = obj[c];
    console.log(`The result is: ${eval(`${a} ${c} ${b}`)}`);
}
