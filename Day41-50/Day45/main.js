// const express = require('express')
// const app = express()
// const port = 3000

// app.use(express.static("public"))
// app.get('/', (req, res) => {
//     console.log("Hey it is a get request")
//     res.send('Fetching all users...')
// })

// app.post('/', (req, res) => {
//     console.log("Hey it is a post request")
//     res.send('Post request done...')
// })

// app.put('/', (req, res) => {
//     console.log("Hey it is a put request")
//     res.send('Put request done...')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })


//Chaining of request
// const express = require('express')
// const app = express()
// const port = 3000

// app.use(express.static("public"))
// app.get('/', (req, res) => {
//     console.log("Hey it is a get request")
//     res.send('Fetching all users...')
// }).post('/', (req, res) => {
//     console.log("Hey it is a post request")
//     res.send('Post request done...')
// }).put('/', (req, res) => {
//     console.log("Hey it is a put request")
//     res.send('Put request done...')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

//Serving the index.html

const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))
app.get('/', (req, res) => {
    console.log("Hey it is a get request")
    res.send('Fetching all users...')
})

app.post('/', (req, res) => {
    console.log("Hey it is a post request")
    res.send('Post request done...')
})

app.put('/', (req, res) => {
    console.log("Hey it is a put request")
    res.send('Put request done...')
})

//to get the index.html properly rendered
// app.get('/index', (req, res) => {
//     console.log("Hey its index")
//     res.sendFile('templates/index.html', {root: __dirname})
// })

// for api adn JSON
app.get('/api', (req, res) => {
    console.log("Hey its index")
    res.json({a:1, b:2, c:3}, {root: __dirname})
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})