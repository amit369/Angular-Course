function generatePrimeNumber(a)
{
    for(let n=2;n<a;n++)
    {
        if(a%n==0)
        {
            return false;
        }
    }
    return true;
}

for(let j=2;j<100;j++)
{
    if(generatePrimeNumber(j))
    {
        console.log(j);
    }
}