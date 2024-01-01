function getSum(multiplier,...arr)
{
 let newarr = arr.map((item) => item*multiplier);
 console.log(newarr);
}

getSum(2,1,2,3,4);