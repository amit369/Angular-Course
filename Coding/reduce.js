const arr = [1,2,3,4];

const newarr = arr.reduce(function (accumulator, currentValue)
{
    return accumulator+currentValue
}, 0);
console.log(newarr);