const obj = [
    {
        name : 'Amit',
        age : 20
    },
    {
        name : 'Sunil',
        age : 30
    }
]

let filteredata = obj.filter((item) => item.age>20);

console.log(filteredata);