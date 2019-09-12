var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded( {extended: true } ));
app.set("view engine", "ejs");

var campgrounds = [
    { name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2017/09/15/08/10/mountains-2751412_960_720.jpg" },
    { name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/06/06/08/32/tent-1439061_960_720.jpg" },
    { name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/12/08/17/45/lake-sara-1892494_960_720.jpg" }
];

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {   
    res.render("campgrounds", {campgrounds:campgrounds});
});

// RESTful routing
app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = { name: name, image: image };
    campgrounds.push(newCampground); // push into array
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(3000, function() {
    console.log('YelpCamp Server started on port 3000');
});