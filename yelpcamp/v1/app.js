var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    var campgrounds = [
        { name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2017/09/15/08/10/mountains-2751412_960_720.jpg"},
        { name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/06/06/08/32/tent-1439061_960_720.jpg" },
        { name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/12/08/17/45/lake-sara-1892494_960_720.jpg" }
    ];

    res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(3000, function() {
    console.log('YelpCamp Server started on port 3000');
});