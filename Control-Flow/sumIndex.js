//Sum of all item upto the limit which are divisible by 3 and 5.

function sum(limit)
{
    let count3 = Math.floor(limit/3);
    let count5 = Math.floor(limit/5);
    let sum = 0;
    for (let index = 1; index <= count3 ; index++) {
        sum = sum + index*3;
    }

    for (let index = 1; index <= count5 ; index++) {
        sum = sum + index*5;
    }

    // for (let index = 0; index <= limit; index++) {
    //     let sum = 0;

    //     if(index % 3 == 0 || index % 5 == 0)
    //         sum = sum + index;
    // }

    return sum;
}

console.log(sum(10));

//calculateGrade
//showStarsIndex
//showPrimeIndex