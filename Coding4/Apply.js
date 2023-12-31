const numbers = [1,2,3,4,5];

function sum()
{
    let result = numbers.reduce((a,b) => a+b,0);
    console.log(`Result ${result}`);
}

sum.apply(numbers);