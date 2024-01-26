function printFibonacciSeries(n)
{
    let num0=0,num1=1,num2;
    for(let i=0;i<n;i++)
    {
        console.log(num0);
        num2 = num0+num1;
        num0= num1;
        num1 = num2;
    }
}

printFibonacciSeries(10);