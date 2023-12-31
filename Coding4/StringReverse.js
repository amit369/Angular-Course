
let str="Amit Chaman";

let strrev = str.split("").reduce((a,b) => a=b+a, "");
console.log(strrev);