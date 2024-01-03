const numbers = [1,2,3,4,5]

function calcsum()
{
     let result = numbers.reduce((a,b) => a+b, 0);
   
    console.log(`Result is ${result}`);
}

calcsum.apply(numbers);