// async function sleep(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(45);
//         },1000);
//     })
// }
// (async function main(){
//     let a = await sleep();
//     console.log(a);
//     let b = await sleep();
//     console.log(b);
// })()

//without destructuring
// let numbers = [10, 20, 30];
// let a = numbers[0];
// let b = numbers[1];
// let c = numbers[2];

// console.log(a, b, c); // 10 20 30

//With destructuring
// let numbers = [10, 20, 30];
// let [a, b, c] = numbers;

// console.log(a, b, c); // 10 20 30

//IIFE without structuring
// async function sleep(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(45);
//         },1000);
//     })
// }
// (async function main(){
//     let x,y = [1,3];
//     console.log(x,y);
// })()

//IIFE with structuring
// async function sleep(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(45);
//         },1000);
//     })
// }
// (async function main(){
//     let [x,y, ... rest] = [1,3,5, 6, 7, 8, 9];
//     console.log(x,y,rest);
// })()

// async function sleep(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(45);
//         },1000);
//     })
// }
// (async function main(){
//     let obj = {
//         a: 1,
//         b: 2,
//         c: 3
//     }
//     let {a,b} = obj; //destructuring 
//     console.log(a,b);
// })();

//Spread syntax
// let arr = [1, 2, 3];
// console.log(...arr); // 1 2 3

// function add(a, b, c) {
//   return a + b + c;
// }

// let numbers = [1, 2, 5, 4];
// console.log(add(...numbers)); // 6 ✅

//Hoisting
// console.log(a); // undefined (not error)
// var a = 10;

//let hoisting
// console.log(b); // ❌ ReferenceError
// let b = 20;

//function hoisting
greet(); // Works fine

function greet() {
  console.log("Hello Aditya!");
}





