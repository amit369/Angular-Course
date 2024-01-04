function calculateSum(num)
{
    const str = num.toString();
    let  digitSum=0;

    for(var i=0;i<str.length;i++)
    {
        digitSum+= parseInt(str[i]);
    }
    console.log('digit Sum ', digitSum);
}

calculateSum(12345);