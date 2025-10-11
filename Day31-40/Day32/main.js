// function nice(name){
//     console.log("Hello, " + name + "!");
//     console.log("Welcome to the program.");
//     console.log("I guess your name is " + name + ".");
// }

// nice("Aditya");

//Sum of two numbers
// function sum(a,b){
//     console.log(a+b);
// }
// sum(55,75);

//another way to write the same sum function
// function add(a,b){
//     return a+b;
// }
// result = add(5,10);
// console.log(result);

//Another way to add the two numbers
// function add(a,b){
//     return a+b;
// }
// result = add(5,10);
// result1 = add(15,25);
// result2 = add(100,200);
// console.log(result);
// console.log(result1);
// console.log(result2);

//Three paramenters function
// function add(a,b,c=10){ //defaukt value of c is 10
//     return a+b+c;
// }
// result = add(5,10);
// result1 = add(15,25,30); //here c will take 30 as value
// console.log(result);
// console.log(result1);

//Arrow function
// const func1 = (x) => {
//     console.log("Hey Aditya, " + x);
// }

// func1("How are you?");
// func1(33);
// func1(true);

//Strings in JavaScript
// let str = "Hello, Aditya! Welcome to the world of JavaScript.";
// console.log(str.length);   //Length of the string
// console.log(str.toUpperCase()); //Convert to uppercase
// console.log(str.toLowerCase()); //Convert to lowercase
// console.log(str.includes("Aditya")); //Check if substring is present
// console.log(str.replace("Aditya", "User")); //Replace substring
// console.log(str.slice(0, 5)); //Extract substring
// console.log(str.split(" ")); //Split string into array  based on space
// console.log(str.charAt(7)); //Character at index 7
// console.log(str.indexOf("JavaScript")); //Index of substring
// console.log(str.lastIndexOf("o")); //Last index of character 'o'
// console.log(str.trim()); //Remove whitespace from both ends
// console.log(str.startsWith("Hello")); //Check if string starts with substring
// console.log(str.endsWith("JavaScript.")); //Check if string ends with substring
// console.log(str.repeat(2)); //Repeat the string twice
// console.log(str.concat(" Enjoy coding!")); //Concatenate strings
// console.log(str.match(/o/g)); //Match all occurrences of 'o'
// console.log(str.search("world")); //Search for substring
// console.log(str.substr(7, 6)); //Substring from index 7 of length 6
// console.log(str.substring(7, 13)); //Substring from index 7 to 13
// console.log(str.valueOf()); //Primitive value of the string 
// console.log(str.localeCompare("Hello, Aditya! Welcome to the world of JavaScript.")); //Compare strings
// console.log(str.padStart(60, '*')); //Pad the start of the string
// console.log(str.padEnd(60, '*')); //Pad the end of the string
// console.log(str.charCodeAt(1)); //Unicode of character at index 1
// console.log(String.fromCharCode(72, 101, 108, 108, 111)); //Create string from Unicode values
// console.log(str.normalize()); //Normalize the string
// console.log(str.toString()); //Convert to string
// console.log(str.anchor("top")); //Create an anchor
// console.log(str.big()); //Make text big
// console.log(str.blink()); //Make text blink
// console.log(str.bold()); //Make text bold
// console.log(str.fixed()); //Make text fixed
// console.log(str.fontcolor("red")); //Set font color
// console.log(str.fontsize(5)); //Set font size
// console.log(str.italics()); //Make text italic
// console.log(str.link("https://www.example.com")); //Create a hyperlink
// console.log(str.small()); //Make text small
// console.log(str.strike()); //Strike through text
// console.log(str.sub()); //Make text subscript
// console.log(str.sup()); //Make text superscript 
// console.log(str.matchAll(/o/g)); //Match all occurrences of 'o' with iterator
// console.log(str.replaceAll("o", "0")); //Replace all occurrences of 'o' with '0'    
// console.log(str.toLocaleUpperCase()); //Convert to uppercase based on locale
// console.log(str.toLocaleLowerCase()); //Convert to lowercase based on locale
// console.log(str.trimStart()); //Remove whitespace from start
// console.log(str.trimEnd()); //Remove whitespace from end
// console.log(str.endsWith("JavaScript.", 50)); //Check if string ends with substring within length       
// console.log(str.startsWith("Hello", 0)); //Check if string starts with substring within length
// console.log(str.includes("Aditya", 0)); //Check if substring is present within length   
// console.log(str.split("", 10)); //Split string into array based on empty string with limit
// console.log(str.slice(-10));

//Strings in JavaScript
// let a = "Hello";

// console.log(a);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]); //undefined

// let a = "Hello";
// console.log(a.length);

//Template literals
// let name = "Aditya";
// console.log(`Hello, ${name}! Welcome to JavaScript.`);
// //double quotes
// console.log("Hello, " + name + "! Welcome to JavaScript.");
// //single quotes
// console.log('Hello, ' + name + '! Welcome to JavaScript.');
// //Double quote inside single quote
// console.log('He said, "Hello, ' + name + '! Welcome to JavaScript."');  
// //Single quote inside double quote
// console.log("He said, 'Hello, " + name + "! Welcome to JavaScript.'");
// //Both single and double quotes inside template literal
// console.log(`He said, "It's great to see you, ${name}! Welcome to JavaScript."`);

//Escape sequences
// console.log("Hello,\nAditya!"); //New line
// console.log("Hello,\tAditya!"); //Tab space
// console.log("Hello, \"Aditya\"!"); //Double quote
// console.log('Hello, \'Aditya\'!'); //Single quote
// console.log("Hello, \\Aditya!"); //Backslash
// console.log("Hello, \rAditya!"); //Carriage return
// console.log("Hello, \bAditya!"); //Backspace
// console.log("Hello, \fAditya!"); //Form feed

//Strings are immutable
let str = "Hello";
str[0] = "J"; // ❌ Won’t change
console.log(str); // Still "Hello"
str = "Jello"; // ✅ Reassigning works
console.log(str); // Now "Jello"