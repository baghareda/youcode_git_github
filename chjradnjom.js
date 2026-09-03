const prompt = require ("prompt-sync")();
const njma = prompt("enter the lenghth of you tree : ")

let i = 1
let res = ""
let star = "*"
let j = 0

while(i <= njma)
{
    while(j < i)
    {
        res = res + star
        j++
    }
    res = res + star
    i++
}