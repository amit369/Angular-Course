const myfunc = async () => {
    const response = await fetch('https://dummyjson.com/cart', {
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json'
        }
    })
    const data = await response.json();
    console.log(data);
}
myfunc();