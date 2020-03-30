function  CreateCircle(radius)
{
    const circle = {
        radius : radius,
        location : {
            x : 1,
            y :2
        },
        isActive : true,
        draw : function(){
            console.log('Hello console.');
        }
    }

    return circle;
}

console.log('obj1 ');
let obj = CreateCircle(10);
obj.draw()

console.log('obj2 ');
let obj2 = CreateCircle(11);
obj2.radius;