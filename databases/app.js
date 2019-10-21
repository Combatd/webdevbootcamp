const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 3000;

require('./db/db');

// middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// new database will be cats
const catsController = require('./controllers/cats');

app.use('/cats', catsController);


app.listen(PORT, () => {
    console.log('app.js listening on ' + PORT);
});