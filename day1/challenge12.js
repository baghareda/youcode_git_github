const prompt = require("prompt-sync")();

let x = Number(prompt("enter the number you wanna convert :"))

let a = parseInt((x / 1000)%10)
let b = parseInt((x / 100)%10)
let c = parseInt((x / 10)% 10)
let d = parseInt((x / 1)%10) 

console.log(d, c, b ,a)
