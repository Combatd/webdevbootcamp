// 1. Correctly include jQuery
// 2. Select all divs and give a purple background
// 3. Select the divs with class "highlight" and make them 200px wide
// 4. Select the div with id "third" and give it an orange border
// Bonus: Select the first div only and change its font color to pink

// jQuery: camelCase


let divStyles = {
    background: "purple",
};
$("div").css(divStyles);

$("div.highlight").css({
    width: "200px",
});

$("#third").css({
    border: "2px solid orange",
});

$("div:first-of-type").css("color", "pink");

// const styles = {
//     color: "red",
//     background: "pink",
//     border: "2px solid purple"
// };

// $("h1").css(styles);
// $("li").css("color", "blue");

// let lis = document.querySelectorAll("li");

// for (let i = 0; i < lis.length; i++) {
//     lis[i].style.color = "green";
// }

// $("li").css("color", "blue");

// $("a").css("font-size", "40px");

// $("li").css({
//     fontSize: "10px",
//     border: "3px dashed purple",
//     background: "rgba(89, 45, 20, 0.5)"
// });