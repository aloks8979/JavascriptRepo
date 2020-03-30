function showPrime(limit)
{
    for (let i = 2; i < limit; i++) 
    {
        var prime = 1;
        for(let c = 2; c < Math.floor(i/2)+1 ; c++)
        {
            if( i % c === 0)
            {
                prime = 0;
                break;
            }
        }
        if(prime != 0)
            console.log(i);
    }
}

showPrime(20);