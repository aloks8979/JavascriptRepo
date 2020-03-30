//divisible by 3--fizz
//divizible by 5--buzz
//divisibl by both 3 and 5 -- fizzbuzz
//not divisible by 3 5 ..same number
//if string or bool passed not a number
function fizzbuzz(number){
    // if(isNaN(number) == true){
    //     console.log('Not a Number');
    //     return;
    //     }

    if( typeof number != 'number'){
        return 'not a number';
    }

    if(number % 3 === 0 && number % 5 === 0){
        return 'FizzBuzz';
    }
    else if(number % 3 === 0){
        return 'Fizz';
    }
    else if(number % 5 === 0){
        return 'Buzz';
    }
    else
        return number;
}

console.log(fizzbuzz(9))
console.log(fizzbuzz(10))
console.log(fizzbuzz(15))
console.log(fizzbuzz(11))
console.log(fizzbuzz('Alok'))