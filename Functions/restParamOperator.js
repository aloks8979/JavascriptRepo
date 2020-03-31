function sum(count,...sumArgs)
{
    console.log(count);
    return sumArgs.reduce((a,b) => a+b);
}

console.log(sum(0,1,2,3,4));
//but we cannot pass after args