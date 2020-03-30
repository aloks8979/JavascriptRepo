function ValueFunction()
{
    let x = 10;
    let y = x;
    console.log(x + '  ' + y);
}

function RefernceFunction()
{
    let x = { value : 10 };
    let y = x;
    console.log( x + '  ' + y);
}

ValueFunction();
RefernceFunction();