const person = { name : 'John'};
const person2 = { name : 'Sanjeev'};

function greet(greeting)
{
    console.log(`${greeting}, ${this.name}`);
}

greet.call(person, 'Hello');
greet.call(person2, 'Hey');