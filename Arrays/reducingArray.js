console.log('Reducing arrays');

const numbers = [1,-1,2,3];

let sum = 0;
for(let i of numbers)
    sum += i;

console.log(sum);

 const s = numbers.reduce( (accumulator,currentValue) => accumulator + currentValue);
 console.log(s);