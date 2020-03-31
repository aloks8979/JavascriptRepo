//function declaration
//Hoisting can call function, before defning function.
HelloName('Alok Singh');

function HelloName(name)
{
    console.log('Hello ' + name);
}

//function expression
//getName .. hoisting cannot call it before defnition

let getName = function(name){
    console.log('Hi ' + name);
}

getName('Anjali Singh');