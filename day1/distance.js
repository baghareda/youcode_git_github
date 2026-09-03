const prompt = require('prompt-sync')();

const distance = prompt ('enter the distance on yard: ')
const km = (distance * 1093.61)

console.log(`${distance} is equal to ${km.toFixed(2)} in km: `)