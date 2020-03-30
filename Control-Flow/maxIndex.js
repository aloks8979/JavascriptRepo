//Get max value and take two parameter
console.log('Write a function,Get max from two value');
function GetMax(a,b){
    console.log('Max function');
    if( a == 'undefined' || b == 'undefined')
    {
        if(a == 'undefined' && b == 'undefined')
        {

        
            console.log('Both are equal.');
            return}
        else{
            return;
        }
    }

    if( a == b)
        console.log('Both value are equal.');
    else{
        let maxValue = a > b ? a : b;
        console.log('Maximum value = ' + maxValue);
    }
}

//Did not passed any value, both a & b will be assigned undefined a default value.
GetMax();

//Passing values a and b is undefined 
//GetMax(a);

//
GetMax(10,15);