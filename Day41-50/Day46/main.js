// const express = require('express')
// const app = express()
// const port = 3000

// //in order to make public folder publicly available
// app.use(express.static("public")) 

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/about', (req, res) => {
//   res.send('Hello About!')
// })
// app.get('/contact', (req, res) => {
//   res.send('Hello Contact!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// const express = require('express')
// const app = express()
// const port = 3000

// //in order to make public folder publicly available
// app.use(express.static("public")) 

// //Middleware 1
// app.use((req, res, next) => {
//   console.log("M1")
//   res.send("Hacked by middleware1")
// //   next()
// })
// //Middleware 2
// app.use((req, res, next) => {
//   console.log("M2")
//   next()
// })

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/about', (req, res) => {
//   res.send('Hello About!')
// })
// app.get('/contact', (req, res) => {
//   res.send('Hello Contact!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")

//Middleware 1
app.use((req, res, next) => {
console.log(req.headers)
  console.log("M1")
  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`)
  next()
})
//Middleware 2
app.use((req, res, next) => {
  console.log("M2")
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello About!')
})
app.get('/contact', (req, res) => {
  res.send('Hello Contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
