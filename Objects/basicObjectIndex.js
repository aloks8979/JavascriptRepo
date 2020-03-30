//Creating variable but it will contain only one variable
// For different value of same type we need to create variable of different name.
let radius = 1;
let x = 2;
let y = 10;

const circle = {
    radius : 1,
    location : {
        x : 1,
        y :2
    },
    isActive : true,
    draw : function(){
        console.log('Hello console.');
    }
}

//how to call this plain 
circle.draw();


let myobject = function CreateObject()
                {
                    
                }

//calling a function
//CreateObject();
//or
myobject();