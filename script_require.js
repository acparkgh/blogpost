// Importing module

const { addTwo, multiplyTwo } = require("./twoNumbers.js");

const sum = addTwo(5, 10);
console.log(`Add two numbers: ${sum}`);

const multiply = multiplyTwo(5, 10);
console.log(`Multiply two numbers: ${multiply}`);