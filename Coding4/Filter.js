const person = [
    {
        name : 'Amit Chaman',
        age : 20
    },
    {
        name : 'Chandan Chaman',
        age : 30
    },
    {
        name : 'Sunil',
        age : 25
    }
]

let fiteredobj = person.filter((item) => item.age > 20);
console.log(fiteredobj);