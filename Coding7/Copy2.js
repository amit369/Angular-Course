let obj = {
    name : 'Sunil Yadav'
}

let myobj = obj;
myobj.name='Amit Chaman';

console.log(myobj);
console.log(obj);


let obj2={
    name : 'Sunil Yadav'
}
let myobj2 = Object.assign({}, obj2);
myobj2.name='Chandu';

console.log(obj2);
console.log(myobj2);


let obj3 = {
    name : 'Rat'
}
let myobj3 = {...obj3};
myobj3.name='Dog';
console.log(obj3);
console.log(myobj3);

let obj4 = {
    name : 'Peter',
    address : {
        city : 'Sunam',
        state : 'Punjab'
    }
}

let user = JSON.parse(JSON.stringify(obj4));
user.address.city = 'Patiala';

console.log(obj4);
console.log(user);