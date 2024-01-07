function checkPrime(m)
{
    for(let i=2;i<m;i++)
    {
        if(m%i==0)
        {
            return false;
        }
    }
    return true;
}

for(let i=2;i<100;i++)
{
    if(checkPrime(i))
    {
       console.log(i);
    }
}