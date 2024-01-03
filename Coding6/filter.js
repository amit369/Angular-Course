const arr = [{
    name : 'Amit',
    age : 10
},
{
    name : 'Sunil',
    age : 20
},
{
    name : 'Chandan',
    age : 30
}
]

const filterData = arr.filter((num) => num.age >20);

console.log(filterData);