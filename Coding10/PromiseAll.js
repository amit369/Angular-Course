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
function sum3()
{
    return new Promise((resolve,rejec) => {
        resolve(4);
    })
}

const doSum = async () => {
    let [result1, result2, result3] = await Promise.all([sum1(), sum2(), sum3()]);
    let sum = result1 + result2 + result3;
    console.log(sum);
}

doSum();