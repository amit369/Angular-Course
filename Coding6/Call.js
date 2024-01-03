let person = {
    name : 'Amit Chaman'
}

function greet(greeting)
{
    console.log(`${greeting} , ${this.name}`);
}

greet.call(person, 'Hello');