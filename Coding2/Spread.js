const person = {
    name : 'Amit Chaman'
}

const newobj = { ...person , age : '20'};
console.log(newobj);

const obj = [{
    name : 'Amit',
    age : 25
},
{
    name : 'Sunil',
    age : 30
}
]
let newobj2 = [...obj , { name : 'Chandu', age : 24}];
console.log(newobj2);

const numbers = [1,2,3,4,5];
const newarr= [...numbers, 6,7,8];
console.log(newarr);