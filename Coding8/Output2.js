let data="size";

const bird = {
    size : "small"
}

console.warn(bird[data]);
console.warn(bird["size"]);
console.warn(bird.size);
console.warn(bird.data);


let c= { name : 'Peter'};
let d;
d = c;
c.name="Anil";
console.log(d.name);

var x;
var x=10;
console.log(x);