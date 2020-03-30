const circle = {
    radius : 1
};

circle.color = 'blue';
circle.draw = function(){}

console.log(circle);

delete circle.radius;

console.log(circle);