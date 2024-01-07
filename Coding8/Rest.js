function callRest(multiplier, ...args)
{
    args = args.map((item )=> item * multiplier);
     console.log(args);
}

callRest(2,1,2,3,4);