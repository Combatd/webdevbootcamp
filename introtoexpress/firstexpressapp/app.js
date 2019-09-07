var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
} );

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye!!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
    console.log("Someone made a request to /dog");
    res.send("MEOW!");
});

app.listen(3000, function () { // port 3000
    console.log('Server listening on port 3000');
});