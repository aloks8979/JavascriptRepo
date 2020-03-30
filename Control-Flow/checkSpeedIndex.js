//Speed limit == 70  ok
//5 --> 1 point
// 12 point suspended
//Math.floor(speed) use it


function checkSpeed(speed)
{
    const limit = 70;
    if(typeof speed != 'number')
        return NaN;
    if(speed <75)
        return 'Ok';
    else if(speed< 180){
        let point = Math.floor((speed-70)/5);
        if(point >= 12)
            return 'Licence Suspended';
        else
            return point;
    }
    else{
        return 'Suspended';
    }
}

console.log(checkSpeed(130));