function outerFunction()
{
    let num = 5;
    function innerFunction()
    {
        return num;
    }
    return innerFunction;
}

let abc = outerFunction();
console.log(abc());