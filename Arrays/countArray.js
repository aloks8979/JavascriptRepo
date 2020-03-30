const numbers = [1,2,3,4,5,1,2];
const count = countOccurances(numbers,1);

console.log(count);

function countOccurances(array,searchElement)
{
    let count = 0;
    for(let item of array)
    {
        if(item === searchElement)
            count++;
    }
    return count;
}