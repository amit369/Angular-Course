const obj = [
    {
        name : 'Amit Chaman',
        age : 20
    },
    {
        name : "Sunil",
        age : 25
    },
    {
        name : 'Dimple',
        age : 21
    }
]

let newobj = obj.filter(item => item.age >21);
console.log(newobj);