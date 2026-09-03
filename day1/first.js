const prompt = require('prompt-sync')();
const name = prompt('What is your name? ');
const color = prompt('What is your favorite color? ');

console.log(`Hello, ${name}! Welcome to the program.`);
console.log(`Your favorite color is ${color}.`);