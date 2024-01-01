var dog ={ name : 'Sunil'};

function greet()
{
    console.log(`Dog name is ${this.name}`);
}

let cal = greet.bind(dog);
cal();