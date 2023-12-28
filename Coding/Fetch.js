fetch('https://dummyjson.com/carts', {
    headers : {
        'Content-Type': 'application/json'
    },
    method : 'GET'
}).then(response => response.json()).then(data => console.log(data));