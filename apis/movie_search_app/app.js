var express = require('express');
var app = express();
const request = require('request');

app.set("view engine", "ejs");

// results route
app.get("/results", function(req, res) {
    request("http://omdbapi.com/?s=iowa&apikey=thewdb", (error, response, body) => {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body)
            res.render("results", {data: data} );
        }
    });
});



app.listen(3000, function() {
    console.log("Movie App started on port 3000");
})