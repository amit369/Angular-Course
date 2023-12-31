let str = "amit chaman";
function capitalizeLetter()
{
return str.replace(/\b\w/g, (item) => item.toUpperCase());
}
console.log(capitalizeLetter('amit chaman'));