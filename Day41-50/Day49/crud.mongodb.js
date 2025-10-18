use("CrudDb")

db.createCollection("courses")

// db.courses.insertOne({
//     name: "Aditya course",
//     price: 0,
//     assignment: 12,
//     projects: 46
// })

// db.courses.insertOne({
//     name: "Utsav course",
//     price: 0,
//     assignment: 14,
//     projects: 36
// })


// console.log(a)
// console.log(a.count())
// console.log(a.toArray())


// let a = db.courses.findOne({price:0})
// console.log(a)

// db.courses.updateOne({price:0}, {$set:{price:100}})

// db.courses.updateMany({price:0}, {$set:{price:100}})

db.courses.deleteOne({price: 100})