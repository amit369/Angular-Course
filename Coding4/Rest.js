function sum(multiplier,...sums)
{
       let summ = sums.map((item) => item * multiplier);
       console.log(summ);
}

sum(2,1,2,3,4);