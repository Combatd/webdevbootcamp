const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./db/db');

const connectionString = "mongodb://localhost/cats"


// new database will be cats
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// add a new cat to the database

// retrieve all cats from the database and console.log each one