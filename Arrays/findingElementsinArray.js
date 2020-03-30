//Finding primitive elements
const numbers = [1,2,3,1,4];
console.log(numbers.indexOf('a'));
console.log(numbers.indexOf(3));
console.log(numbers.lastIndexOf(1));
console.log(numbers.indexOf(2) != -1);
console.log(numbers.includes(2));

//finding reference types
const courses = [
    {id : 1, name : 'a'},
    {id : 2, name : 'b'}
];

const c = courses.find(function(courses){
    return courses.name === 'a';
});

console.log(c);

//search for index
const c1 = courses.findIndex(function(courses){
    return courses.name === 'b';
});

console.log(c1);