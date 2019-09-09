var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.render("home.ejs"); // embedded javascript
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});

// /fallinlovewith/girl
// you fell in love with girl

app.listen(3000, function() {
    console.log("Server listening on port 3000");
});