import fs from "fs/promises";

let a = await fs.readFile("harry.txt");
let b = await fs.appendFile("harry.txt", "yeashhh");
console.log(a.toString());