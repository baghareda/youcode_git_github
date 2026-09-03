const prompt = require ('prompt-sync')();

const temperature = prompt ('Enter the temperature in Celsius: ');
const fahrenheit = (temperature * 9/5) + 32;
console.log(`${temperature}°C is equal to ${fahrenheit}°F.`);


