function generateFibonacci(n)
{
    if(n<=1)
        return n;
    else 
        generateFibonacci(n-1) + generateFibonacci(n-2)
}

for(let i=1;i<100;i++)
{
    console.log(generateFibonacci(i));
}