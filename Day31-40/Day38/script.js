// let prom1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Yes I am done");
//         resolve("Aditya");
//     },3000)
// })

// prom1.then((a)=>{
//     console.log(a);
// })

// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//             resolve(455);
//         }, 3500);
//     })
// }

// console.log("Loading Modules");
// console.log("Do something else");

// console.log("Load Data");
// let data  = getData();

// data.then((v)=>{
//     console.log(data);
//     console.log("Process data");
//     console.log("Task 2");
// })

// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     })
// }

async function getData() {
    //Simulate getting data from a server
     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') //copied and pasted JSON placeholder
     //we added await in order to wait for fetch to get the data
     let data = await x.json() //pass the data into the json
    //  console.log(data);
     return data;
}

async function main() {
    console.log("Loading Modules");
    console.log("Do something else");
    console.log("Load Data");
    let data = getData();
    console.log(data);
    console.log("Process data");
    console.log("Task 2");
}

main();