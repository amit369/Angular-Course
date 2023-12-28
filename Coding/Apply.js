const numbers = [1,2,3,4,5];

function sum()
{
    const result = this.reduce((acc,num) => acc+num, 0);
    console.log(` Sum : ${result}`);
}

sum.apply(numbers);