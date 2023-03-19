const information = require('./information');

const cowsay = require("cowsay");
console.log(cowsay.say({
    text: `Mon nom est ${information.name} et je suis à ${information.campus}`
}));