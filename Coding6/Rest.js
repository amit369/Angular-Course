
function calloperator(multiplier,...args)
{
    let sum = args.map((item) => item*multiplier);
    console.log(sum);
}

calloperator(2,1,2,3,4,5);