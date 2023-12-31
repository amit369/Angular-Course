let numbers = [1,2,3,4,5];

const newnumbers =  [...numbers,6,7,8];
console.log(newnumbers);

let obj = { name : 'amit', age : '25'};

let newobj= {...obj, occupation : 'Engineer'};
console.log(newobj);