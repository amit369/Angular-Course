// let obj = {
//     name : 'Peter'
// }

// let user = obj;
// user.name='Amit';

// console.log(obj.name);
// console.log(user.name);

// let obj = {
//     name : 'Peter'
// }

// let user = Object.assign({},obj);
// user.name="Amit";
// console.log(obj.name);
// console.log(user.name);


// let obj = {
//     name : 'Peter'
// }

// let user =  {...obj};
// user.name="Amit";
// console.log(obj.name);
// console.log(user.name);

let obj = {
    name : 'Peter',
    address : {
        city : 'Noida',
        state : 'UP'
    }
};

let user = JSON.parse(JSON.stringify(obj));
user.address.city= 'Gurgaon';
console.log(obj);
console.log(user);