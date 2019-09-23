// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const $ = require("jquery"); // jquery

const styles = {
    color: "red",
    background: "pink",
    border: "2px solid purple"
};

$("h1").css(styles);
$("li").css("color", "blue");

let lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
    lis[i].style.color = "green";
}

$("li").css("color", "blue");

$("a").css("font-size", "40px");

$("li").css({
    fontSize: "10px",
    border: "3px dashed purple",
    background: "rgba(89, 45, 20, 0.5)"
});