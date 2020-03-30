function AddressC(street,city,zipCode)
{
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

const addr1 = new AddressC('A','B',1);
const addr2 = new AddressC('A','B',1);


function areEqual()
{
    for(let key1 in addr1)
        if(addr1[key1] != addr2[key1])
            return false;
    return true;
}

console.log('areEqual = ' + areEqual());

function areSame(addr1,addr2)
{
    return addr1 === addr2
}

