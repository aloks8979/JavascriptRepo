console.log('Constructor and Factory objects.');

let address = {
    street : 'ejipura',
    city : 'bangalore',
    zipCode : 566067 
}

function AddressF(street,city,zipCode)
{
    return {
        street,
        city,
        zipCode
    }
}

const objF = AddressF('A','G',11);
console.log(objF);

function AddressC(street,city,zipCode)
{
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

const objC = new AddressC('QW','GH',133);
console.log(objC);