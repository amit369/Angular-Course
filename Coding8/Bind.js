let dog = {
    name : 'Tommy'
}

function callDog()
{
    console.log(`Dog name is ${this.name}`);
    
}

let ab = callDog.bind(dog);
ab();