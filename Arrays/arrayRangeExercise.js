const numbers = arrayFromRange(1,5);
console.log(numbers);

function arrayFromRange(min,max)
{
    const rangeNumber = [];
    for(let item = min; item <= max ;item++ )
        rangeNumber.push(item);
    
    return rangeNumber;
}

console.log(arrayFromRange(1,5));
console.log('New Array');
console.log(arrayFromRange(-10,5));