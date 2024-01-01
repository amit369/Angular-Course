let person = {name : 'Amit'};

function greet(greeting)
{
    console.log(`${greeting} , ${this.name}`);
}

greet.call(person,'Hello');