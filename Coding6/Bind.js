let dog = {
    name : 'Tommy'
}

function callDog()
{
    console.log(`Dog name is ${this.name}`);
}

let a = callDog.bind(dog);
a();