function checkPalindrome(str)
{
    if(str==(str.split("").reverse().join("")))
    {
        return true;
    }
   return false;
}
console.log(checkPalindrome('aba'));