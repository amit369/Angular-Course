const emp=[{
    name :'Amit', age : 10
},
{
    name : 'Sunil', age: 20
},
{
    name : 'Sunny', age : 30
}
];

let filteredata = emp.filter((item) => item.age > 20);

console.log(filteredata);