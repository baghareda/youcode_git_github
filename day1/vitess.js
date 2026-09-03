const prompt = require ('prompt-sync')();

const vitess = prompt("enter the vitesse on km/h : ")
const ms = (vitess * 0.27778)

console.log(`${vitess} in m/h is : ${ms}`)

