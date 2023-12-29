const dog = {name : 'Doggy'};

function greetDog()
{
    console.log(`My name is ${this.name}`);
}

let abc=greetDog.bind(dog);
abc();