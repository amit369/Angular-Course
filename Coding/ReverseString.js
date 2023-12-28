function reverseString(str)
{
      return str.split("").reduce((a,b) => a = b+a , "");
}

console.log(reverseString('amit chaman'));