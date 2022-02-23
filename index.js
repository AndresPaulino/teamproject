const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 8000;

// Initialize Middleware
app.use(express.static('./public'));
app.use(bodyParser.json());

// Initialize Pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
})

// Initialize Routes
const hopsRoute = require('./routes/hops')(app);
const yeastRoute = require('./routes/yeast')(app);
const maltRoute = require('./routes/malt')(app);
const alcoholRoute = require('./routes/alcohol')(app);

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});