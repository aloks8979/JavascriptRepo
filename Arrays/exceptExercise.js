console.log('Hello');

const numbers = [1,2,3,4,1,1];

function except(array, excluded)
{
    let output = [];
    for(let item of array)
    {
        if(!excluded.includes(item))
            output.push(item);
    }
    return output;
}

const output = except(numbers , [1,2]);
console.log(output);