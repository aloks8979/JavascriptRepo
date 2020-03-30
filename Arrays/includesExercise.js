const numbers = [1,2,3,4];

console.log(numbers.includes(2));

function includes(array, searchElement)
{
    for(let item of array)
    {
        if(item === searchElement)
            return true;
    }
    return false;
}

console.log('User defined Includes method');

console.log(includes(numbers,2));