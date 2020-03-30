const circle1 = {
    radius : 1,
    draw : function(){
        console.log('draw');
    }
};

const circle2 = {

};

for(let key in circle1)
    circle2[key] = circle1[key]

console.log(circle2);

const circle3 = Object.assign({},circle1);
console.log(circle3);

const circle4 = {...circle3}
console.log(circle4);