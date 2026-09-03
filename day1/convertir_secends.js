const  prompt = require('prompt-sync')();

var secends = prompt("enter the secends you want to enter : ")

let hour = parseInt(secends / 3600)
let min = parseInt((secends / 60) % 60)
let sec = parseInt(secends % 60)

console.log(hour, min , sec)