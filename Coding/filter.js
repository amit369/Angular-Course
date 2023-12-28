
const obj = [
    {name : 'Amit Chaman', age : 20},
    {name : 'Sunil Yadav', age : 21},
    {name : 'Sachin Tendulkar', age : 25},
    {name : 'Seema', age : 20},
    {name : 'Seema', age : 5},
]

let newobj = obj.filter((item) => item.age >=20);
console.log(newobj);