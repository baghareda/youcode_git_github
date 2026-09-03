const prompt = require('prompt-sync')();

const tempe = prompt("entrer la temperature en cel : ")

if (tempe < 0)
{
    console.log("solid")
}
else if (tempe <= 100)
{
    console.log("liquide")
}
else
{
    console.log("gaz")
}