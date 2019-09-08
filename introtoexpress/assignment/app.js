var express = require("express");
var app = express();


// Visiting "/" should print "Hi there, welcome to my assignment!"
app.get("/", function(req,res) {
    res.send("Hi there, welcome to my assignment!");
});

/* Visiting "/speak/pig" should print "The pig says 'Oink'"
Visiting "/speak/cow" should print "The cow says 'Moo'"
Visiting "/speak/dog" should print "The dog says 'Woof Woof!'" */
app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal;
    var call = "";
    if (animal.toLowerCase() === "pig") {
        call = "Oink!";
    } else if (animal.toLowerCase() === "cow") {
        call = "Moo!";
    } else if (animal.toLowerCase() === "dog") {
        call = "Woof Woof!";
    }
    res.send(`The ${animal} says '${call}'`);
});

// app.get("/speak/cow", function(req, res) {
//     res.send("The cow says 'Moo!'");
// });

// app.get("/speak/dog", function(req, res) {
//     res.send("The dog says 'Woof Woof!'");
// });

/* 
Visiting "/repeat/hello/3" should print "hello hello hello"
Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
Visiting "/repeat/blah/2" should print "blah blah"
*/
app.get("/repeat/:message/:times", function(req, res) {
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    for (var i = 0; i < times; i++) {
        result += " "
        result += message;
    }
    res.send(`${result} `);
} );

/* If a user visits any other route, print:
  "Sorry, page not found...What are you doing with your life?"*/
app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function() {
    console.log("Server listening on port 3000");
});