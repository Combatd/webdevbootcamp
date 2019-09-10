// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//     console.error('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });

var newRequest = require('request');
// error will hold any error we encounter
newRequest('http://www.google.com', function (error, response, body) {
    if(error) {
        console.log("SOMETHING WENT WRONG!");
        console.log(error);
    } else {
        if(response.statusCode == 200) {
            // things worked!
            console.log(body);
        }
    }
});