let dog = { name : 'Tinku'};

function greetDog()
{
    console.log(` Name is ${this.name}`);
}

let abc = greetDog.bind(dog);
abc();