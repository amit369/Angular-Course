function capitalizeFirstLetter(str)
{
    return str.replace(/\b\w/g, (item) => item.toUpperCase());
}

console.log(capitalizeFirstLetter('amit chaman'));