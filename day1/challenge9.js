const prompt = require ('prompt-sync')();

const x2 = prompt("enter your first number : ")
const y2 = prompt("enter your secend number : ")
const z2 = prompt("enter your last number : ")
const x1 = prompt("enter your first number : ")
const y1 = prompt("enter your secend number : ")
const z1 = prompt("enter your last number : ")

console.log((Math.sqrt(2 * ((x2-x1)**2 + (y2-y1)**2 + (z2-z1)**2))).toFixed(2))