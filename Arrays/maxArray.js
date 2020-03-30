const numbers = [1,2,10,11,3,4];

const max = getMax(numbers);

console.log(max);

function getMax(array)
{
    let max = numbers[0];
    for(let item of array)
    {
        if(max < item)
            max = item;
    }
    return max;
}