console.log('Date in JavaScript.');


const date1 = new Date();
const date2 = new Date('May 11 2018 09:00');
const date3 = new Date(2019,4,24,9);
console.log(date1 + '    ' + date2 + '    ' + date3);

date2.setFullYear(2020);
console.log(date2.toDateString());
console.log(date2.toTimeString());
console.log(date2.toISOString());