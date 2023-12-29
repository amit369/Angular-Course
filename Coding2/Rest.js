function calc(multiplier, ...args)
{
    args =  args.map((item) => {
        return item * multiplier
    });
    console.log(args);
}

calc(2,1,2,3,4);