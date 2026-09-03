const prompt = require('prompt-sync')();

const a = prompt("enter your first number : ")
const b = prompt("enter your secend number : ")
const c = prompt("enter your last number : ")

console.log("la moyenne geo de votre nombre est : ")
console.log((a * b * c)^(1/3))