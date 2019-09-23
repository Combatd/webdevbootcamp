// $("h1").text(); // => jQuery Methods Demo Page

// $("ul").text(); // => Skittles Starburst Twix

// $('li').text(); // "SkittlesStarburstTwix";

// $("h1").text("New Text!"); // => <h1>New Text!!!</h1>

// $("h1").text(); // => "New Text!!!"

// $('li').text("Rusty, Colt's dog, is adorable");
// <li>Rusty, Colt's dog, is adorable</li> <li>Rusty, Colt's dog, is adorable</li> <li>Rusty, Colt's dog, is adorable</li>

console.log($('ul').html()); // html() refers to innerHTML

// $('ul').html("<li>I hacked your UL!</li> <li>Rusty is still adorable</li>");
// updates to 2 lis in ul

// $('li').html("<a href='Google.com'>CLICK ME TO GO TO GOOGLE!</a>");
// changes 2 lis to google links

// we will change the img to this image http://1.bp.blogspot.com/-CNlpt4uOiHI/Tqqp8hje0II/AAAAAAAAArk/ApSYg40A0jQ/s400/common-vampire-bat_505_600x450.jpg

$('img').css("width", "200px"); // resize flying red fox to 200px
// $('img').attr("src", "http://1.bp.blogspot.com/-CNlpt4uOiHI/Tqqp8hje0II/AAAAAAAAArk/ApSYg40A0jQ/s400/common-vampire-bat_505_600x450.jpg");
// changed flying red fox to vampire bat

// $('input').attr("type", "color"); changes to black

$("img:first-of-type").attr("src", "http://1.bp.blogspot.com/-CNlpt4uOiHI/Tqqp8hje0II/AAAAAAAAArk/ApSYg40A0jQ/s400/common-vampire-bat_505_600x450.jpg"); 
// first img only will change to vampire bat from flying red fox

$("img").last().attr("src", "http://1.bp.blogspot.com/-CNlpt4uOiHI/Tqqp8hje0II/AAAAAAAAArk/ApSYg40A0jQ/s400/common-vampire-bat_505_600x450.jpg");
// last img will change to vampire bat

// .val() helps us extract the value from out of an element selected
$("input").val(); // => "" // whatever is in the input

$("input").val("Rusty Steele");
// <input type"text" placeholder="your name"> => Rusty Steele
$("input").val(""); // reset the input to empty

console.log($("select").val()); // => "Toad"

$("h1").addClass("correct");
// adds .correct style to h1

$("h1").removeClass("correct"); 
// removes .correct style from h1

$("li").addClass("wrong");
// adds .wrong style to all lis
$("li").removeClass("wrong");
// removes .wrong style from all lis

$("li").addClass("correct");

$("li").toggleClass("correct");
// will add or remove from lis depending if it had class or not
// lis that had the class have it removed
// lis that did not have the class get it added

$("li").first().toggleClass("done");
// toggles .done from off to on for the first li

