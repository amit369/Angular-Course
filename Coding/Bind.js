const dog = { name : "Buddy"};

function sayName()
{
    console.log(`My name is ${this.name}`);
}

const dogNameFunction = sayName.bind(dog);
dogNameFunction();