console.log(sum(1,1,2,3,5));

function sum()
{
    let sum = 0;
    let arg = arguments;
    for(let item of arg)
    {
        sum += item;
    }    
    return sum;
}