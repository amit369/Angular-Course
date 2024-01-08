// const str = 'Hi there 123!';
const str = "Hi My name is Amit Chaman";
let arr=[];
for(let i=0;i<str.length;i++)
{
    arr[str[i]]=0;
}

for(let i=0;i<str.length;i++)
{
    arr[str[i]]=arr[str[i]]+1;
}
console.log(arr);