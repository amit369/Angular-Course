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