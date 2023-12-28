const numbers=[1,2,3,4,5];
const newnumbers = [...numbers,6,7,8];
console.log(newnumbers);

const obj= [
    {
        name : 'Amit Chaman', age : 20
    },
    {
        name : 'Amit Chaman', age : 21
    }
]
let obj2 = [...obj , { name : 'Sunil', age : 22}];
console.log(obj2);