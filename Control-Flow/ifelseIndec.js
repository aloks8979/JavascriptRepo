//if elseif else,switch,for,while,do while,
//for in
//for of

let a,b = null;
a = 15; b = 20;
function GetMax(){
    if(a == b)
        console.log('Both are equal.');
    let max = a > b ? a : b;
    console.log(max);
}

GetMax();
console.log('a');

let arr = ['Alok','Anjali','Vicky','Tony']

console.log('For loop iteration');
for (let index = 0; index < arr.length; index++) {
    console.log(index + ' = ' + arr[index])
}

console.log('For loop iteration by in reserved keyword');
for(let item in arr)
{
    console.log(item + ' = ' +arr[item]);
}

console.log('For loop iteration by of reserved keyword');
for(let i of arr)
{
    console.log(i);
}