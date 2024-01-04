function sumOfDigits(n)
{
    let str = n.toString();
    let digitSum = 0;

    for(var i=0;i<str.length;i++)
    {
        digitSum += parseInt(str[i]);
    }
    console.log('Digit Sum '+ digitSum);
}

sumOfDigits(120345);