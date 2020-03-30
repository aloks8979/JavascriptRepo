function calculateGrade(numberArray)
{
    let sum = 0;
    for(let item of numberArray)
    {
        sum = sum + item;
    }
    let avg = sum/numberArray.length;
    if(avg < 60 ) return 'F';
    if(avg < 70 ) return 'D';
    if(avg < 80 ) return 'C';
    if(avg < 90 ) return 'B';
    return 'A';
}

let markArray = [20,110,100];
console.log(calculateGrade(markArray));