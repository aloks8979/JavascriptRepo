//create a constrctor function
function Circle(radius)
{
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const o = new Circle(1);
o.draw();