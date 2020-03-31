function display(n)
{
    try {
        if(n == 0)
            throw new Error('Divide by zero.');
        else
            console.log('Alok Singh');
    } catch (e) {
        alert(e)
    }
}

display(0);