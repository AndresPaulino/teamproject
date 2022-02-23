const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

app.use(bodyParser.json());

// let counter = 1;

// app.get('/home', (req, res) => {
//     res.sendFile(path.join(__dirname, './index.html'))
// })

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, './about.html'))
// })

// app.get('/contact', (req, res) => {
//     res.sendFile(path.join(__dirname, './contact.html'))
// })

// app.get('/product', (req, res) => {
//     res.sendFile(path.join(__dirname, './products.html'))
// })

const alcoholRoute = require('./routes/alcohol')(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const axios = require("axios");

// // Make a request for a user with a given ID
// getUser();

// async function getUser() {
//   try {
//     const response = await axios.get("https://api.punkapi.com/v2/beers");
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//     }

//     console.log("Testing");
// }
