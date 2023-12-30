fetch('https://dummyjson.com/cart', {
    method : 'GET',
    headers : {
        'Content-Type' : 'application/json'
    }
}).then((data) => {
    return data.json();
}).then((data) => {
    console.log(data);
})