function showStars(row)
{
    for (let i1 = 1; i1 <= row; i1++) {
        for (let i2 = 0; i2 < i1; i2++) {
            console.log('*');
        }
        console.log('\n');
    }
}

showStars(5);