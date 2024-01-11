let numbers = [12,12,1,3,14,14];
let count={};

for(let i=0;i<numbers.length;i++)
{
  count[numbers[i]] = 0;
}

for(let i=0;i<numbers.length;i++)
{
    count[numbers[i]] = count[numbers[i]]+1;
}

console.log(count);