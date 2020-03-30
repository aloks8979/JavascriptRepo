function showProperties(obj)
{
    for(let item in obj)
    {
        if(typeof obj[item] == 'string')
            console.log(item + '  ' + obj[item]);
    }
}

let movie = {
    title : 'a',
    releaseYear : 2018,
    rating : 4.5,
    director : 'b'
}

showProperties(movie);