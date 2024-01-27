function printPrimeNumbers(n)
{
    for(let j=2;j<n;j++)
    {
        if(n%j==0)
        {
            return false;
        }
    }
    return true;
}

for(let i=2;i<100;i++)
{
    if(printPrimeNumbers(i))
    {
        console.log(i);
    }

}