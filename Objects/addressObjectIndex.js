const object1 = {
    street : 1,
    city : 'Jaunpur',
    zipCode : 222136 
}

function showAddress(addr)
{
    for(let key in addr)
        console.log(key + '   ' + addr[key]);
}

showAddress(object1);