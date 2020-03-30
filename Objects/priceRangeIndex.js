console.log('I am Price range function.');
//Price range arra object

// let priceRange = {
//     price,type,item,productId
// }


function PriceRange(productId,type,item,price)
{
    this.productId = productId,
    this.type = type,
    this.item = item,
    this.price = price
}

let o1 = PriceRange(11,'A','ASA',110);
let o2 = PriceRange(11,'A','ASA',110);
let o3 = PriceRange(11,'A','ASA',110);