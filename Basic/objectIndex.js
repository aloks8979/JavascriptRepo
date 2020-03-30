let id = 1;
let name = 'Alok Singh';

//Instead of seperate declaration, declare in group
let person = {
    id : 1,
    name : 'Alok Singh'
};


console.log( person.id + '  ' + person.name);
console.log(person['id'] + '  ' + person['name']);