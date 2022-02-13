
const express = require('express')
const app = express()
const port = 8000
const path = require('path')

let counter = 1;

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, './contact.html'))
})

app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, './products.html'))
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})