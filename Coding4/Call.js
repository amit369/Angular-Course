const person = {name : 'Anil'};

function greet(greeting)
{
    console.log(`${greeting}, ${this.name}`)
}

greet.call(person,'Hello');