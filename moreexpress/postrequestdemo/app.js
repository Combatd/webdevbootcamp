const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

const friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", function(req, res) {
    res.render("home");
});

// POST route to add new friends
app.post("/addfriend", function(req, res) {
    var newFriend = req.body.newfriend; // all data from req body
    friends.push(newFriend);
    res.redirect("/friends"); // redirects back to friends
});

// "/friends"
app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});

app.listen(3000, function(){
    console.log("Server listening on port 3000");
});