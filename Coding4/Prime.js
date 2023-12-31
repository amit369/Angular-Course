function checkPrime(n)
{
    for(let i=2;i<n;i++)
    {
        if(n%i==0)
        {
            return false;
        }
    }
    return true;
}

for(var i=1;i<=100;i++)
{
     if(checkPrime(i))
     {
        console.log(i);
     }
}