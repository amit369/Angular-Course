function calculateSum(n)
{
    let str=n.toString();
    let sum=0;
    for(i=0;i<str.length;i++)
    {
         sum += parseInt(str[i]);
    }
    console.log("Sum is "+ sum);
}

calculateSum(1234);