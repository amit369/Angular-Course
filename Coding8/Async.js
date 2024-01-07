const doWork = async () => {
    let result = await fetch('https://dummyjson.com/cart', {
         method : 'GET',
         headers : {
            'Content-Type' :'application/json'
         }
    });

    let data = await result.json();
    console.log(data);
}
doWork();