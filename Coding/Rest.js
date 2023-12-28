function getNumber(multiplier,...arr)
{
    return arr.map((item) => item*multiplier);
}

console.log(getNumber(2,1,2,3,4));