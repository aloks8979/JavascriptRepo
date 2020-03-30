function CreateCircle(radius)
{
    return {
        radius,
        draw : function(){
            console.log('draw');
        } 
    }
}

const circleObj1 = CreateCircle();

function Circle(radius)
{
    this.radius = radius,
    this.draw = function(){
        console.log('draw2');
    }
}

const circleObj2 = new Circle();