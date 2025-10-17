const express = require('express')
const app = express()
const port = 3000

app.search('view engine', 'ejs')

app.get('/', (req, res) => {
    let siteName = "Adidaas"
    let searchText = "Search Now"
    res.render("index", {siteName: siteName, searchText: searchText })
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when?"
    let blogContent = "It is a very good brand"
    res.render("blogpost", { blogTitle: blogTitle, blogContent: blogContent })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
