function foo()
{
    let b=10;
    function inner()
    {
        return b;
    }
    return inner;
}

let getf = foo();
console.log(getf());