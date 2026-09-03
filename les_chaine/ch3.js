
function concat(n1, n2)
{
    let i = 0
    let res = ""

    while(n1[i] !== undefined)
    {
        res = res + n1[i]
        i++
    }

    i = 0
    while(n2[i] !== undefined)
    {
        res = res + n2[i]
        i++
    }
    console.log(res)
}
concat("abcd", "efgh")







