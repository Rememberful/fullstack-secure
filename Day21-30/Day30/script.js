// console.log("Aditya is a boy");
// console.log("Aditya is a good boy");

// variables in JS
// var a = 23; 
// var b = 44;

// console.log(typeof(a));
// console.log(typeof b);
// console.log(typeof a)
// console.log(a + b);

//Using the const keyword
// const author = "Aditya";
// console.log(author);
// author = "Rohan"; // This will give an error because we cannot change the value of a constant variable
// console.log(author);

// //Use of let keyword
// let city = "New York";
// console.log(city);
// city = "Los Angeles"; // This is allowed because we can change the value of a let variable
// console.log(city);

//Var vs let
// let num = 10;
// console.log(num); // Output: 10
// {
//     let num = 20; // This 'num' is different from the 'num' outside this block
//     console.log(num); // Output: 20
// }

// var num = 10;
// console.log(num); // Output: 10
// {
//     console.log(num); // Output: 10
//     var num = 20; // This 'num' is different from the 'num' outside this block
//     console.log(num); // Output: 20
// }

// let num = 10;
// console.log(num); // Output: 10
// {
//     console.log(num); // Output: 10
//     let num = 20; // This 'num' is different from the 'num' outside this block
//     console.log(num); // Output: 20
// }

//Data Types in JS
// let name = "Aditya"; // String
// let age = 23; // Number
// let isStudent = true;
// let address; // Undefined
// let phone = null; // Null
// let hobbies = ["reading", "coding", "gaming"]; // Array
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof address);
// console.log(typeof phone);
// console.log(typeof hobbies);
// console.log(typeof person); 

//Object in JS
// let o={
//     name: "Aditya",
//     age: 23,
// }
// console.log(o);

//another way to create object
// let o = {
//     "name": "Aditya", //quotes are optional if there is no space in the key
//     "job code": 23, //since it is having space we have to use quotes
// }
// console.log(o);
// console.log(o.name); //dot notation
// console.log(o["job code"]); //bracket notation

// //updating the object
// o.name = "Rohan"; //dot notation
// console.log(o);

let o = {
    "name": "Aditya", //quotes are optional if there is no space in the key
    "job code": 23, //since it is having space we have to use quotes
}
console.log(o);
//adding new key-value pair
o.age = 24;
console.log(o);