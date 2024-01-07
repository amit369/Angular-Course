const numbers = [1,2,3,4];

function calculateSum()
{
    let result = this.reduce((item,acc) => item+acc, 0);
    console.log(`Result is ${result}`);
}

calculateSum.apply(numbers);