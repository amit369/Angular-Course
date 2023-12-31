let dog = { name : 'Tinku'};

function callDog()
{
    console.log(`Dog name is ${this.name}`);
}

let dogg = callDog.bind(dog);
dogg();