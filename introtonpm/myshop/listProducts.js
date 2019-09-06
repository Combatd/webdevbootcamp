var faker = require('faker');

var itemName; // will be random product name
var itemPrice; // will be random product price

console.log("Welcome to my shop!");
console.log("==========");
for (let i = 0; i < 10; i++) {
    itemName = faker.commerce.productName();
    itemPrice = faker.commerce.price();
    console.log(itemName + " - $" + itemPrice);
}