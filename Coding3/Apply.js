let numbers = [1,2,3,4,5];

function calc()
{
    let result = numbers.reduce((a,b) => a+b , 0);
    console.log(`Result is ${result}`);
}

calc.apply(numbers);