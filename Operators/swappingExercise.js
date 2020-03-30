let a = 'blue';
let b = 'red';

let c;
c = a;
a = b;
b = c;

console.log('Printed by 3rd var  ' + a + '   ' + b );

function swap(){
    console.log(a+b)
}

swap();
