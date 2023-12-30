const person = [
    {name : 'Amit' , age : 20},
    { name : 'Sunil' , age : 30},
    { name : 'Chandan', age : 40}
]

const filteredData = person.filter((item) => item.age > 20);

console.log(filteredData);