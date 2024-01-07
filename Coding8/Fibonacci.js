function printFibonacci()
{
    let n1=0,n2=1,n3;
    for(let i=1;i<10;i++)
    {
           console.log(n1);
           n3=n1+n2;
           n1=n2;
           n2=n3;
    }
}

printFibonacci();