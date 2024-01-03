function CapitalLetter(str)
{
    return str.replace(/\b\w/g, (item) => item.toUpperCase());
}

console.log(CapitalLetter('amit chaman'));