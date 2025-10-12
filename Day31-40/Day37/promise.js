let prom1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Yes I am done");
        resolve("Aditya");
    },3000)
})

prom1.then((a)=>{
    console.log(a);
})