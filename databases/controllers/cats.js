const express = require('express');
const router = express.Router();
const Cat = require('../models/cats.js');
console.log('========');
console.log(Cat);
console.log('========');

router.get('/new', (req, res) => {

    res.render('new.ejs');
});

router.post('/', (req, res) => {
    console.log(req.body, ' content of the form');

    if(req.body.age > 15) {
        req.body.temperament = "Old";
    }

    // create a cat using model to add to our database

    Cat.create(req.body, (err, createdCat) => {
        if(err) {
            res.send(err);
        } else {
            console.log(createdCat);

            // get /cats from the url in index route
            res.redirect('/cats');
        }
    });
});