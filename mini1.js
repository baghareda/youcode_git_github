const prompt = require ("prompt-sync")();

console.log("/////// ENTER THE CALCUL YOU WANT /////////")
console.log("1. Addition")
console.log("2. Multiplication")
console.log("3. Subtraction")
console.log("4. Division")
console.log("5. Exit")

let n1 = Number(prompt("enter your first number : "))
let n2 = Number(prompt("enter yor secend number : "))

function add(n1, n2)
{
    console.log(`the res of ${n1} + ${n2} = ${n1 + n2}`)
}

function multi(n1, n2)
{
    console.log(`the res of ${n1} * ${n2} = ${n1 * n2}`)
}

function sub(n1, n2)
{
    console.log(`the res of ${n1} - ${n2} = ${n1 - n2}`)
}

function div(n1, n2)
{
    if (n2 == 0)
    {
        console.log("impossible")
    }
    else 
    {
        console.log(`the res of ${n1} / ${n2} = ${n1 / n2}`)
    }  
}


let calcul = Number(prompt("CHOOSE FROM 1 TO 5 : "))

switch (calcul)
{
    case 1:
        add(n1, n2)
        break;
    
    case 2:
        multi(n1, n2)
        break;

    case 3:
        sub(n1, n2)
        break;

    case 4:
        div(n1, n2)
        break;

    case 5:
        break
    
    default:
        console.log("////////NON OF THE ABOVE/////////")

}