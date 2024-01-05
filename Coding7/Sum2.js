function calculateSum(str)
{
    let str1 = str.toString();
    let sum=0;
    for(let i=0;i<str1.length;i++)
    {
       sum += parseInt(str1[i]);
    }
    console.log(sum);
}

calculateSum(122);