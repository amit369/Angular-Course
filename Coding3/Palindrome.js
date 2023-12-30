function checkPalindrome(n)
{
    return n === n.split("").reverse().join("");
}

console.log(checkPalindrome('amit'));
console.log(checkPalindrome('aba'));