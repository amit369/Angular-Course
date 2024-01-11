function sum1()
{
    return new Promise((resolve,reject) => {
        resolve(1);
    })
}
function sum2()
{
    return new Promise((resolve,reject) => {
        resolve(2);
    })
}

const doSum = async() => {
    let sum = await sum1() + await sum2();
    console.log(sum);
}

doSum();