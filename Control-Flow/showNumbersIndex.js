function showNumbers(limit)
{
    for (let index = 0; index <= limit; index++) {
        let d = index % 2 == 0 ? "EVEN" : "ODD"
        console.log(index + '  ' + d)
    }
}

showNumbers(10)