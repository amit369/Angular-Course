function reverse(a)
{
    var reverse='';
    for(let n=a.length-1;n>=0;n--)
    {
        reverse+=a[n];
    }
    return reverse;
}
console.log(reverse('amit chaman'));