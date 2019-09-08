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

// route containing route parameters
app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send(`WELCOME TO THE ${subreddit.toUpperCase()} SUBREDDIT!`);
});

app.get("/r/:subredditName/comments/:id/:title", function (req, res) {
    res.send("WELCOME TO THE COMMENTS PAGE!");
});

// app.("/r/subredditName/comments/id/title/")

// order of routes matters, this could be our error page
app.get("*", function (req, res) {
    res.send("You are a star!");
});

app.listen(3000, function () { // port 3000
    console.log('Server listening on port 3000');
});