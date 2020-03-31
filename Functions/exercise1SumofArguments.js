console.log('Exercise1');

function sum(...item)
{
    let s = 0;
    if(Array.isArray(item) === 'true')
    {
        let newArr = item[0];
        for(let i of newArr)
            s += i;
    }
    else
    {
         for(let i of item)
         {
             s += i;     
         }
         return s;
    }
    return s;
}

console.log(sum([1,2,3,4]));




