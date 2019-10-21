const mongoose = require('mongoose');

const catSchema = new mongoose.Schema( {
    name: {type: String},
    age: {type: Number},
    temperament: {type: String}
});


const Cat = mongoose.model("Cat", catSchema);

model.exports = Cat;