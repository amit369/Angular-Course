function sumDigits(number)
{
    const numString = number.toString();
    let digitSum =0 ;

    for(let i=0;i<numString.length;i++)
    {
        digitSum+=parseInt(numString[i]);
    }
    console.log(' Digit Sum is ', digitSum);
}

sumDigits(12345);