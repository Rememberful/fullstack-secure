// const fs = require("fs"); //to import it
// console.log("starting");
// // fs.writeFileSync("harry.txt", "Harry is a good boy");
// fs.writeFile("harry2.txt", "Aditya is a good boy",()=>{
//     console.log("done");
// })
// console.log("ending");

const fs = require("fs"); //to import it
console.log("starting");
fs.writeFile("harry2.txt", "Aditya is a good boy",()=>{
    console.log("done");
    fs.readFile("harry2.txt", (error,data)=>{
        console.log(error, data.toString());
    })
})

fs.appendFile("harry.txt", "Aditya", (error,data)=>{
    console.log(data);
})
console.log("ending");

