function getString(num)
{
   return num.replace(/\b\w/g , (item) => item.toUpperCase());
}

console.log(getString('amit chaman'));