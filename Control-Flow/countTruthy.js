
function countTruthy(arrVal){
    let countTruthy = 0;
    for(let item of arrVal)
    {
        if(item)
            countTruthy++;
    }
    return countTruthy;
}
const arr = ['',1,2,null,3,undefined]
console.log(countTruthy(arr));