const sum1 = () => {
    return new Promise((resolve,reject) => {
        resolve(10);
    })
}

const sum2 = () => {
    return new Promise((resolve,reject) => {
        resolve(20);
    })
}

const doSum= async () => {
    let sum = await sum1() + await sum2();
    console.log(sum);
}

doSum();