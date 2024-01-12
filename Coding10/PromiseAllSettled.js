function sum1() {
    return new Promise((resolve, reject) => {
        resolve(1);
    });
}

function sum2() {
    return new Promise((resolve, reject) => {
        resolve(2);
    });
}

function sum3() {
    return new Promise((resolve, reject) => {
        resolve(4);
    });
}

const doSum = async () => {
    // Use Promise.allSettled to concurrently execute sum1(), sum2(), and sum3()
    let results = await Promise.allSettled([sum1(), sum2(), sum3()]);

    // Extract the values from the settled promises
    let values = results.map(result => result.status === 'fulfilled' ? result.value : 0);

    let sum = values.reduce((acc, val) => acc + val, 0);
    console.log(sum);
}

doSum();
