numbers  = [1,2,3,4,1,1,-1,-2];

const filtered = numbers.filter(function(value){
    return value >= 0
});

console.log(filtered);

console.log('2nd ways');

//second ways of filtering 
const fil = numbers.filter(v => v >=0);
console.log(fil);