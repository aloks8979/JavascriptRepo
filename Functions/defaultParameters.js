let interestAmount = function ineterest(principle,rate=3.5,years=2)
{
    return principle*rate*years/100;
}

console.log(interestAmount(100))